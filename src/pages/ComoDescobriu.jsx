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
    <div className="origem-container">
      <h1 className="origem-title">CodeQuest</h1>

      <p className="origem-subtitle">
        Como você descobriu o CodeQuest?
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
  );
}
