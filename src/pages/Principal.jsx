import { useParams, Link, useNavigate } from "react-router-dom";
import { perguntasPorLinguagem } from "../utils/PerguntasPorLinguagem";
import "../styles/Principal.css";
import { carregarProgresso, calcularNivel } from "../utils/Progresso";
import "bootstrap-icons/font/bootstrap-icons.css";


const nomesBonitos = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  csharp: "C#",
  php: "PHP",
  typescript: "TypeScript",
};

export default function Principal() {
  const { linguagem } = useParams();
  const navigate = useNavigate();

  const listaQuestoes = perguntasPorLinguagem[linguagem] || [];
  const nomeLinguagem = nomesBonitos[linguagem] || linguagem;

  const progresso = carregarProgresso();
  const progressoLingua = progresso[linguagem] || { concluidas: [], xp: 0 };

  const { nivel, proximoNivelXp } = calcularNivel(progressoLingua.xp);

  return (
    <div className="tela-principal">

      {/* COLUNA 1 — MENU LATERAL */}
      <aside className="coluna-esquerda">
        <img src="/code.svg" className="logo-menu" />

        <nav className="menu-links">
          <i class="bi bi-journal-bookmark"></i>
          <Link to="/linguagens">Trocar Linguagem</Link>
        </nav>
      </aside>

      {/* COLUNA 2 — CONTEÚDO */}
      <main className="coluna-centro">

        <header className="principal-header">
          <h1>CodeQuest — {nomeLinguagem}</h1>

          <p className="principal-text">
            Aqui estão as lições iniciais da linguagem que você escolheu.
            Complete as fases para ganhar XP e subir de nível!
          </p>

          <p className="principal-status">
            Nível <strong>{nivel}</strong> · XP:{" "}
            <strong>{progressoLingua.xp}</strong>
            {proximoNivelXp && (
              <> · Próximo nível em {proximoNivelXp - progressoLingua.xp} XP</>
            )}
          </p>
        </header>

        {listaQuestoes.length === 0 ? (
          <p className="aviso">
            Ainda não temos lições cadastradas para {nomeLinguagem}. 😊
            Em breve adicionaremos mais conteúdo!
          </p>
        ) : (
          <div className="lista-licoes">
            {listaQuestoes.map((licao) => {
              const concluida = progressoLingua.concluidas?.includes(licao.id);
              const anteriorConcluida =
                licao.id === 1 ||
                progressoLingua.concluidas?.includes(licao.id - 1);
              const bloqueada = !anteriorConcluida && !concluida;

              return (
                <div
                  key={licao.id}
                  className={`card-licao fase ${concluida ? "concluida" : ""
                    } ${bloqueada ? "bloqueada" : ""}`}
                >
                  <div className="fase-header">
                    <div className="fase-circle">
                      {bloqueada ? "🔒" : concluida ? "✅" : licao.id}
                    </div>

                    <div className="fase-texto">
                      <h2>{licao.titulo}</h2>
                      <p>{licao.descricao}</p>
                    </div>
                  </div>

                  {concluida && (
                    <p className="badge-concluida">✔ Lição concluída</p>
                  )}

                  {bloqueada && licao.id > 1 && (
                    <p className="badge-bloqueada">
                      Complete a lição {licao.id - 1} para desbloquear esta fase.
                    </p>
                  )}

                  <button
                    className="btn-comecar"
                    disabled={bloqueada}
                    onClick={() =>
                      !bloqueada &&
                      navigate(`/principal/${linguagem}/licao/${licao.id}`)
                    }
                  >
                    {bloqueada
                      ? "Bloqueada"
                      : concluida
                        ? "Refazer lição"
                        : "Começar lição"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* COLUNA 3 — PAINEL DIREITO */}
      <aside className="coluna-direita">
        <div className="principal_juntos">
        <Link className="principal_perfil" to="/perfil">
            <i class="bi bi-person-circle"></i>
        Perfil</Link>
        </div>

      </aside>

    </div>
  );
}
