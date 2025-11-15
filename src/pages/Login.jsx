import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../styles/Login.css";

const MySwal = withReactContent(Swal);

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // limpa estados de erro
    setErroEmail(false);
    setErroSenha(false);

    const emailLimpo = email.trim();
    const senhaLimpa = senha.trim();

    if (!emailLimpo) {
      setErroEmail(true);
      return mostrarErro("Digite o email.");
    }

    if (!senhaLimpa) {
      setErroSenha(true);
      return mostrarErro("Digite a senha.");
    }

    try {
      setLoading(true);

      // busca o usuário pelo email no json-server
      const resposta = await fetch(
        `http://localhost:3001/usuarios?email=${encodeURIComponent(
          emailLimpo
        )}`
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar usuário.");
      }

      const usuarios = await resposta.json();

      // nenhum usuário com esse email
      if (!usuarios.length) {
        setErroEmail(true);
        setErroSenha(true);
        setLoading(false);
        return mostrarErro("Email ou senha incorretos!");
      }

      const usuario = usuarios[0];

      // compara senha
      if (usuario.senha !== senhaLimpa) {
        setErroSenha(true);
        setLoading(false);
        return mostrarErro("Email ou senha incorretos!");
      }

      // login OK → salva no localStorage
      localStorage.setItem(
        "usuarioLogado",
        JSON.stringify({
          id: usuario.id,
          email: usuario.email,
          nome: usuario.nome,
        })
      );

      navigate("/linguagens");
    } catch (erro) {
      console.error(erro);
      mostrarErro("Erro ao tentar fazer login. Tente novamente.");
      setLoading(false);
    }
  }

  function mostrarErro(msg) {
    return MySwal.fire({
      icon: "error",
      title: "Ops...",
      text: msg,
      confirmButtonColor: "#d33",
    });
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>

        {/* EMAIL */}
        <div className="login-field">
          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErroEmail(false);
            }}
            className={`login-input ${erroEmail ? "login-input-erro" : ""}`}
          />
          {erroEmail && (
            <p className="login-error-text">Email inválido.</p>
          )}
        </div>

        {/* SENHA */}
        <div className="login-field login-password-wrapper">
          <input
            name="password"
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
              setErroSenha(false);
            }}
            className={`login-input ${erroSenha ? "login-input-erro" : ""}`}
          />

          <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            className="login-toggle-senha-btn"
          >
            {mostrarSenha ? "🙈" : "👁"}
          </button>

          {erroSenha && (
            <p className="login-error-text">Senha incorreta.</p>
          )}
        </div>

        <div className="login-actions">
          <Link to="/recuperar" className="login-link">
            Esqueceu a senha?
          </Link>

          <button
            type="submit"
            disabled={loading}
            className={`login-submit-btn ${loading ? "loading" : ""}`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>

        <p className="login-footer">
          Não tem conta?{" "}
          <Link to="/cadastro" className="login-link">
            Crie
          </Link>
        </p>
      </form>
    </div>
  );
}
