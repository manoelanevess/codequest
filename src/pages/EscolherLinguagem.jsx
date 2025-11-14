import "../styles/EscolherLinguagem.css";
import { useNavigate } from "react-router-dom";


const linguagens = [
  { id: 1, nome: "JavaScript",  mascote: "/rapSentada.png" },
  { id: 2, nome: "Python",      mascote: "/sapo.png" },
  { id: 3, nome: "Java",        mascote: "/tartSentada.png" },
  { id: 4, nome: "C#",          mascote: "/pingSentado.png" },
  { id: 5, nome: "PHP",         mascote: "/rapSentada.png" },
  { id: 6, nome: "TypeScript",  mascote: "/sapo.png" },
];

export default function EscolherLinguagem() {
  const navigate = useNavigate();

  function selecionarLinguagem(lang) {
    localStorage.setItem("linguagemEscolhida", lang.nome);
    navigate("/como-descobriu");
  }

  return (
    <div className="lang-container">
      <h1 className="lang-title">CodeQuest</h1>
      <p className="lang-subtitle">Escolha a linguagem que deseja aprender</p>

      <div className="lang-grid">
        {linguagens.map((lang) => (
          <button
            key={lang.id}
            className="lang-card"
            onClick={() => selecionarLinguagem(lang)}
          >
            {lang.mascote && (
              <img
                src={lang.mascote}
                alt={lang.nome}
                className="lang-mascote"
              />
            )}
            <span className="lang-name">{lang.nome}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
