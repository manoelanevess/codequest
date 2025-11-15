const BASE_KEY = "codequest_progresso";
const API_URL = "http://localhost:3001"; // json-server

// Pega o usuário logado do localStorage
function getUsuarioLogado() {
  try {
    const raw = localStorage.getItem("usuarioLogado");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Gera a chave de progresso para o usuário atual (no localStorage)
function getStorageKey() {
  try {
    const user = getUsuarioLogado();
    if (!user) return BASE_KEY + "_anonimo";
    const identificador = user.id || user.email || "anonimo";
    return `${BASE_KEY}_${identificador}`;
  } catch (e) {
    console.error("Erro ao definir chave de progresso:", e);
    return BASE_KEY + "_anonimo";
  }
}

// Lê o progresso salvo no localStorage do usuário atual
export function carregarProgresso() {
  try {
    const STORAGE_KEY = getStorageKey();
    const bruto = localStorage.getItem(STORAGE_KEY);
    if (!bruto) return {};
    return JSON.parse(bruto);
  } catch (e) {
    console.error("Erro ao ler progresso:", e);
    return {};
  }
}

// Salva o progresso no localStorage do usuário atual
function salvarProgresso(dados) {
  const STORAGE_KEY = getStorageKey();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

// Calcula o nível com base no XP total da linguagem
export function calcularNivel(xp) {
  if (xp < 100) return { nivel: 1, proximoNivelXp: 100 };
  if (xp < 250) return { nivel: 2, proximoNivelXp: 250 };
  if (xp < 500) return { nivel: 3, proximoNivelXp: 500 };
  return { nivel: 4, proximoNivelXp: null };
}

// Calcula o XP total somando todas as linguagens
function calcularXpTotal(progresso) {
  return Object.values(progresso).reduce((total, item) => {
    return total + (item.xp || 0);
  }, 0);
}

// Sincroniza XP, linguagens e lição concluída com o db.json
async function sincronizarComBackend(linguagem, idLicao, progresso) {
  const usuario = getUsuarioLogado();
  if (!usuario) return;

  const xpTotal = calcularXpTotal(progresso);

  try {
    // Busca o usuário atual no backend para pegar linguagens já salvas
    const respUser = await fetch(`${API_URL}/usuarios/${usuario.id}`);
    if (!respUser.ok) {
      throw new Error("Erro ao buscar usuário no backend");
    }
    const userData = await respUser.json();

    // Garante que exista um array de linguagens
    const linguagensUser = Array.isArray(userData.linguagens)
      ? [...userData.linguagens]
      : [];

    // Adiciona a linguagem se ainda não estiver lá
    if (!linguagensUser.includes(linguagem)) {
      linguagensUser.push(linguagem);
    }

    // Atualiza XP total + linguagens do usuário
    await fetch(`${API_URL}/usuarios/${usuario.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        xp: xpTotal,
        linguagens: linguagensUser,
      }),
    });

    // Registra a lição concluída na coleção /licoes (se estiver usando)
    await fetch(`${API_URL}/licoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuarioId: usuario.id,
        linguagem,
        licaoId: idLicao,
        concluidaEm: new Date().toISOString(),
      }),
    });
  } catch (e) {
    console.error("Erro ao sincronizar com backend:", e);
  }
}

// Marca lição como concluída e soma XP (para o usuário atual)
export function marcarLicaoConcluida(linguagem, idLicao, xpGanho = 50) {
  const progresso = carregarProgresso();

  if (!progresso[linguagem]) {
    progresso[linguagem] = {
      concluidas: [],
      xp: 0,
    };
  }

  const jaConcluida = progresso[linguagem].concluidas.includes(idLicao);

  if (!jaConcluida) {
    progresso[linguagem].concluidas.push(idLicao);
    progresso[linguagem].xp += xpGanho;
  }

  salvarProgresso(progresso);

  // também atualiza no db.json: xp total + linguagens + registro da lição
  sincronizarComBackend(linguagem, idLicao, progresso);
}

// resetar progresso só do usuário atual (apenas localStorage)
export function resetarProgressoUsuarioAtual() {
  const STORAGE_KEY = getStorageKey();
  localStorage.removeItem(STORAGE_KEY);
}
