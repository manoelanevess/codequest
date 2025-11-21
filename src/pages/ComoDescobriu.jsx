// src/pages/ComoDescobriu.jsx
import "../styles/ComoDescobriu.css";
import { useNavigate } from "react-router-dom";

const opcoes = [
  "Família/Amigos",
  "TikTok",
  "Facebook/Instagram",
  "Google",
  "Outro",
];

export default function ComoDescobriu() {
  const navigate = useNavigate();

  function selecionarOrigem(origem) {
    localStorage.setItem("origemCodeQuest", origem);
    navigate("/meta-diaria");
  }

  return (
    <div className="origem-page">
      <div className="origem-card">
        <img
          src="logomais.svg"
          className="origem-logo"
          alt="Logo CodeQuest"
        />

        <h2 className="origem-title">Como você descobriu o CodeQuest?</h2>

        <p className="origem-subtitle">
          Isso ajuda a gente a entender melhor de onde você veio e melhorar a sua experiência.
        </p>

        <div className="origem-lista">
          {opcoes.map((op) => (
            <button
              key={op}
              className="origem-botao"
              onClick={() => selecionarOrigem(op)}
            >
              {op}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
