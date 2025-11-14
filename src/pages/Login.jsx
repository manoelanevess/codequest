import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    const fd = new FormData(e.currentTarget);
    const email = (fd.get("email") || "").toString().trim();
    const senha = (fd.get("password") || "").toString().trim();

    if (!email || !senha) {
      return alert("Preencha e-mail e senha.");
    }

    // salvando usuário da forma simples
    localStorage.setItem("usuarioLogado", JSON.stringify({
      id: Date.now(),
      email
    }));

    // redireciona para a página das linguagens
    navigate("/linguagens");
  }

  return (
    <div style={{ minHeight:"100vh", display:"grid", placeItems:"center" }}>
      <form onSubmit={handleSubmit} style={{ display:"grid", gap:10, width:300 }}>
        <h2>Login</h2>

        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Senha" />

        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <Link to="/recuperar">Esqueceu a senha?</Link>
          <button type="submit">Entrar</button>
        </div>

        <p>
          Não tem conta? <Link to="/cadastro">Crie</Link>
        </p>
      </form>
    </div>
  );
}
