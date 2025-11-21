import "../styles/EscolherLinguagem.css";
import { useNavigate } from "react-router-dom";

const linguagens = [
  { id: 1, nome: "JavaScript",  slug: "javascript",  mascote: "/javascript.png" },
  { id: 2, nome: "Python",      slug: "python",      mascote: "/python.png" },
  { id: 3, nome: "Java",        slug: "java",        mascote: "/java.png" },
  { id: 4, nome: "C#",          slug: "csharp",      mascote: "/csharp.png" },
  { id: 5, nome: "PHP",         slug: "php",         mascote: "/php.png" },
  { id: 6, nome: "TypeScript",  slug: "typescript",  mascote: "/typescript.png" },
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
    <>
    <div className="lang-container">
      <div className="lang_logo">
      <img  src="/logoazul.svg" alt="" />
      </div>
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
    </>
  );
}
