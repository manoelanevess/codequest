import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Cadastro.css";

const API = "http://localhost:3001";

export default function Cadastro() {
  const navigate = useNavigate();

  // estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [termos, setTermos] = useState(false);

  const [msg, setMsg] = useState("");

  function showError(texto) {
    setMsg(texto);
    setTimeout(() => setMsg(""), 2000);
  }

  async function handleCadastro(e) {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmSenha) {
      return showError("Preencha todos os campos.");
    }

    if (!termos) {
      return showError("Você precisa concordar com os termos de uso.");
    }

    if (senha.length < 6) {
      return showError("A senha deve ter pelo menos 6 caracteres.");
    }

    if (senha !== confirmSenha) {
      return showError("As senhas não coincidem.");
    }

    try {
      const novoUser = {
        nome,
        email,
        senha,
        xp: 0,
      };

      // cria usuário na API
      const resposta = await fetch(`${API}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUser),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao criar usuário na API");
      }

      const usuarioCriado = await resposta.json();

      // já considera o usuário logado
      localStorage.setItem(
        "usuarioLogado",
        JSON.stringify({
          id: usuarioCriado.id,
          email: usuarioCriado.email,
          nome: usuarioCriado.nome,
        })
      );

      // feedback de sucesso
      alert("Conta criada com sucesso!");

      // redireciona direto para a página principal do fluxo
      navigate("/linguagens"); 

    } catch (err) {
      console.error(err);
      showError("Erro ao criar conta.");
    }
  }

  return (
    <div className="cad-container">
      <form className="cad-card" onSubmit={handleCadastro}>
        <img src="/logo.svg" className="cad-logo" alt="CodeQuest" />

        {msg && <div className="cad-alert">{msg}</div>}

        <h2>Crie sua conta</h2>

        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="cad-input"
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="cad-input"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="cad-input"
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          className="cad-input"
        />

        <label className="cad-termos">
          <input
            type="checkbox"
            checked={termos}
            onChange={(e) => setTermos(e.target.checked)}
          />
          Eu concordo com os termos de uso
        </label>

        <button className="cad-btn" type="submit">
          Criar conta
        </button>

        <p className="cad-back">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </div>
  );
}
