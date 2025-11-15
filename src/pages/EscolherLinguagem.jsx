import "../styles/EscolherLinguagem.css";
import { useNavigate } from "react-router-dom";

const linguagens = [
  { id: 1, nome: "JavaScript",  slug: "javascript",  mascote: "/rapSentada.png" },
  { id: 2, nome: "Python",      slug: "python",      mascote: "/sapo.png" },
  { id: 3, nome: "Java",        slug: "java",        mascote: "/tartSentada.png" },
  { id: 4, nome: "C#",          slug: "csharp",      mascote: "/pingSentado.png" },
  { id: 5, nome: "PHP",         slug: "php",         mascote: "/rapSentada.png" },
  { id: 6, nome: "TypeScript",  slug: "typescript",  mascote: "/sapo.png" },
];

export default function EscolherLinguagem() {
  const navigate = useNavigate();

  function selecionarLinguagem(lang) {
    // salvar no localStorage 
    localStorage.setItem("linguagemEscolhida", lang.slug);

    // vai para a rota principal dinâmica
    navigate(`/principal/${lang.slug}`);
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
