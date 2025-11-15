import { useParams, Link, useNavigate } from "react-router-dom";
import { perguntasPorLinguagem } from "../utils/PerguntasPorLinguagem";
import "../styles/Principal.css";
import { carregarProgresso, calcularNivel } from "../utils/Progresso";

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

  // Progresso salvo no localStorage
  const progresso = carregarProgresso();
  const progressoLingua = progresso[linguagem] || { concluidas: [], xp: 0 };

  const { nivel, proximoNivelXp } = calcularNivel(progressoLingua.xp);

  return (
    <div className="principal-container">
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

        <div className="principal-links">
          <Link to="/linguagens" className="btn-voltar">
            ← Trocar linguagem
          </Link>
          <Link to="/perfil" className="btn-voltar">
            → Ver meu perfil
          </Link>
        </div>
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

            // Lição anterior (para regra de desbloqueio)
            const anteriorConcluida =
              licao.id === 1 ||
              progressoLingua.concluidas?.includes(licao.id - 1);

            // Bloqueada se a anterior não foi concluída e ela mesma não foi
            const bloqueada = !anteriorConcluida && !concluida;

            return (
              <div
                key={licao.id}
                className={`card-licao fase ${
                  concluida ? "concluida" : ""
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
    </div>
  );
}
