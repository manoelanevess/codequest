import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Licao.css";
import { quizzes } from "../utils/Quizzes";
import { marcarLicaoConcluida, carregarProgresso, calcularNivel } from "../utils/Progresso";

const mascotes = {
  javascript: "/rapSentada.png",
  python: "/sapo.png",
  java: "/tartSentada.png",
  csharp: "/pingSentado.png",
  php: "/rapSentada.png",
  typescript: "/sapo.png",
};

const nomesBonitos = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  csharp: "C#",
  php: "PHP",
  typescript: "TypeScript",
};

export default function Licao() {
  const { linguagem, id } = useParams();
  const idNumero = Number(id);

  const perguntas = quizzes[linguagem]?.[idNumero] || [];
  const nomeLinguagem = nomesBonitos[linguagem] || linguagem;

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [acertou, setAcertou] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const [animXP, setAnimXP] = useState(false);
  const [animMascote, setAnimMascote] = useState("idle");
  const [subiuNivel, setSubiuNivel] = useState(false);

  const progressoAntes = carregarProgresso()[linguagem]?.xp || 0;
  const nivelAntes = calcularNivel(progressoAntes).nivel;

  useEffect(() => {
    if (acertou === true) setAnimMascote("feliz");
    if (acertou === false) setAnimMascote("triste");
  }, [acertou]);

  const perguntaAtual = perguntas[indiceAtual];

  function escolherAlternativa(indiceAlt) {
    if (respostaSelecionada !== null) return;

    setRespostaSelecionada(indiceAlt);
    const acertouAgora = indiceAlt === perguntaAtual.correta;
    setAcertou(acertouAgora);

    if (acertouAgora) setAcertos((prev) => prev + 1);
  }

  function proximaPergunta() {
    setAnimMascote("idle");

    const proximoIndice = indiceAtual + 1;

    if (proximoIndice < perguntas.length) {
      setIndiceAtual(proximoIndice);
      setRespostaSelecionada(null);
      setAcertou(null);
    } else {
      // MARCA LIÇÃO + XP
      marcarLicaoConcluida(linguagem, idNumero, 50);

      const progressoAtual = carregarProgresso()[linguagem]?.xp || 0;
      const nivelDepois = calcularNivel(progressoAtual).nivel;

      if (nivelDepois > nivelAntes) {
        setSubiuNivel(true);
        setAnimMascote("levelup");
      }

      setAnimXP(true);
      setFinalizado(true);
    }
  }

  const totalPerguntas = perguntas.length;
  const progresso = Math.round(((indiceAtual + 1) / totalPerguntas) * 100);

  return (
    <div className="licao-container">
      <header className="licao-header">
        <h1>
          {nomeLinguagem} — Lição {id}
        </h1>
        <p>
          Pergunta {indiceAtual + 1} de {totalPerguntas}
        </p>

        <div className="barra-progresso">
          <div
            className="barra-preenchida"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>

        <Link to={`/principal/${linguagem}`} className="btn-voltar-licoes">
          ← Voltar para as lições
        </Link>
      </header>

      {/* MASCOTE */}
      <div className={`mascote-area ${animMascote}`}>
        <img src={mascotes[linguagem]} alt="Mascote" />
      </div>

      {!finalizado ? (
        <>
          <div className="card-pergunta">
            <p className="enunciado">{perguntaAtual.enunciado}</p>

            <div className="lista-alternativas">
              {perguntaAtual.alternativas.map((alt, index) => {
                const selecionada = respostaSelecionada === index;
                const correta = perguntaAtual.correta === index;

                let classe = "alternativa";

                if (respostaSelecionada !== null) {
                  if (correta) classe += " correta";
                  else if (selecionada && !correta) classe += " incorreta";
                }

                return (
                  <button
                    key={index}
                    className={classe}
                    onClick={() => escolherAlternativa(index)}
                  >
                    {alt}
                  </button>
                );
              })}
            </div>
          </div>

          {respostaSelecionada !== null && (
            <div className="area-feedback">
              {acertou ? (
                <p className="feedback certo">✅ Boa! Você acertou!</p>
              ) : (
                <p className="feedback errado">
                  ❌ Quase! Tenta de novo na próxima!
                </p>
              )}

              <button className="btn-proximo" onClick={proximaPergunta}>
                {indiceAtual + 1 === totalPerguntas
                  ? "Ver resultado final"
                  : "Próxima pergunta"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="resultado-final">
          <h2>Resultado final</h2>

          <p>
            Você acertou <strong>{acertos}</strong> de{" "}
            <strong>{totalPerguntas}</strong> perguntas.
          </p>

          {/* ANIMAÇÃO DE XP */}
          {animXP && (
            <div className="xp-ganho">+50 XP</div>
          )}

          {subiuNivel && (
            <p className="levelup-msg">🎉 Você subiu de nível!!!</p>
          )}

          <Link to={`/principal/${linguagem}`} className="btn-voltar-licoes">
            ← Voltar para as lições
          </Link>
        </div>
      )}
    </div>
  );
}
