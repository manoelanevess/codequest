import { useState } from "react";
import "../styles/MetaDiaria.css";

const metas = [
  { id: "casual",   titulo: "Casual",   descricao: "5 min / dia"  },
  { id: "regular",  titulo: "Regular",  descricao: "10 min / dia" },
  { id: "focado",   titulo: "Focado",   descricao: "15 min / dia" },
  { id: "intenso",  titulo: "Intenso",  descricao: "20 min / dia" },
];

export default function MetaDiaria() {
  const [selecionada, setSelecionada] = useState("regular");

  function confirmarMeta() {
    localStorage.setItem("metaDiaria", selecionada);
    alert("Meta diária definida! 🎯 Agora é só começar a aprender.");
    // depois você pode redirecionar para a tela principal:
    // navigate("/principal");
  }

  return (
    <div className="goal-container">
      {/* barra de progresso sem seta */}
      <div className="goal-top">
        <div className="goal-progress">
          <div className="goal-progress-bar" />
        </div>
      </div>

      <h2 className="goal-title">
        Ótimo! Agora escolha
        <br />
        uma meta diária.
      </h2>

      <div className="goal-list">
        {metas.map((meta) => (
          <button
            key={meta.id}
            className={
              "goal-item" +
              (meta.id === selecionada ? " goal-item--active" : "")
            }
            onClick={() => setSelecionada(meta.id)}
          >
            <span className="goal-item-title">{meta.titulo}</span>
            <span className="goal-item-desc">{meta.descricao}</span>
          </button>
        ))}
      </div>

      <button className="goal-continue" onClick={confirmarMeta}>
        CONTINUAR
      </button>
    </div>
  );
}
