import { Link } from "react-router-dom";
import "../styles/Perfil.css";
import { carregarProgresso, calcularNivel } from "../utils/Progresso";
import { perguntasPorLinguagem } from "../utils/PerguntasPorLinguagem";

const nomesBonitos = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  csharp: "C#",
  php: "PHP",
  typescript: "TypeScript",
};

export default function Perfil() {
  const progresso = carregarProgresso();

  const linguagens = Object.keys(perguntasPorLinguagem);

  return (
    <>
    <div className="perfil-container">
      <header className="perfil-header">
        <h1>Seu Perfil</h1>
        <p>Acompanhe seu progresso no CodeQuest ✨</p>
      </header>

      <div className="perfil-lista">
        {linguagens.map((lingua) => {
          const nome = nomesBonitos[lingua];
          const total = perguntasPorLinguagem[lingua].length;

          const prog = progresso[lingua] || { concluidas: [], xp: 0 };
          const concluidas = prog.concluidas.length;

          const porcentagem = Math.round((concluidas / total) * 100);

          const { nivel, proximoNivelXp } = calcularNivel(prog.xp);

          return (
            <div key={lingua} className="perfil-card">
              <div className="perfil-topo">
                <div className="perfil-mascote">
                  <div className="topo-card">
                  <img
                    src={`/${lingua}.png`}
                    alt={nome}
                  />
                <h2>{nome}</h2>
                </div>
                  </div>
                <p className="perfil-progresso">
                  {concluidas} de {total} lições concluídas ({porcentagem}%)
                </p>
              </div>

              <div className="perfil-status">
                <p>
                  <strong>Nível:</strong> {nivel}
                </p>
                <p>
                  <strong>XP:</strong> {prog.xp}
                </p>

                {proximoNivelXp && (
                  <p>
                    <strong>Próximo nível em:</strong>{" "}
                    {proximoNivelXp - prog.xp} XP
                  </p>
                )}
              </div>
            </div>
            
          );
        })}
      </div>
    </div>
      <Link to="/principal" className="btn-voltar">
        ← Voltar
      </Link>
    </>
  );
}
