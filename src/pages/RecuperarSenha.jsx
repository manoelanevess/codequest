import { sendRecoveryEmail } from "../lib/sendEmail";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RecuperarSenha.css";

const API = "http://localhost:3001";

// gera código 6 dígitos
const genCode = () =>
  String(Math.floor(100000 + Math.random() * 900000));

export default function RecuperarSenha() {
  const navigate = useNavigate();
  const [step, setStep] = useState("email"); // email | code | new | done
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [ui, setUi] = useState({ type: "info", msg: "" }); // alert bonitinho

  // helper de alerta
  function show(type, msg) {
    setUi({ type, msg });
  }

  // busca usuário por e-mail
  async function findUser(email) {
    const r = await fetch(
      `${API}/usuarios?email=${encodeURIComponent(email)}`
    );
    const arr = await r.json();
    return arr[0] || null;
  }

  // Etapa 1: enviar código
  async function onSendEmail(e) {
    e.preventDefault();
    if (!email.trim()) return show("warn", "Digite seu e-mail.");

    try {
      let user = await findUser(email.trim());

      // se não existir, cria cadastro mínimo
      if (!user) {
        const rNew = await fetch(`${API}/usuarios`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.trim(),
            nome: "Usuário",
            senha: "",
            xp: 0,
          }),
        });
        user = await rNew.json();
      }

      const resetCode = genCode();
      const resetExpires = Date.now() + 60 * 60 * 1000; // 1h

      // salva código e expiração na API
      await fetch(`${API}/usuarios/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, resetCode, resetExpires }),
      });

      // === ENVIAR E-MAIL COM O CÓDIGO (EmailJS) ===
      try {
        await sendRecoveryEmail({
          to_name: user?.nome || "dev",
          to_email: email.trim(),
          code: resetCode,
        });

        show(
          "success",
          "Um código de 6 dígitos foi enviado para o seu e-mail."
        );
      } catch (mailErr) {
        console.error("Falha ao enviar email:", mailErr);
        // Mantém o fluxo mesmo assim: o código já está salvo na API
        show(
          "warn",
          "Código gerado, mas o e-mail não pôde ser enviado. Verifique o EmailJS."
        );
      }

      setStep("code");
    } catch (err) {
      console.error(err);
      show(
        "error",
        "Não foi possível enviar o código. Confira se a API (3001) está rodando."
      );
    }
  }

  // Etapa 2: validar código
  async function onValidateCode(e) {
    e.preventDefault();
    if (!code.trim())
      return show("warn", "Digite o código recebido por e-mail.");

    try {
      const user = await findUser(email.trim());
      if (!user?.resetCode)
        return show("error", "Solicite um novo código.");

      if (Date.now() > Number(user.resetExpires)) {
        return show("error", "Código expirado. Solicite novamente.");
      }
      if (String(user.resetCode) !== String(code.trim())) {
        return show("error", "Código inválido. Tente novamente.");
      }

      show("success", "Código validado! Defina sua nova senha.");
      setStep("new");
    } catch (err) {
      console.error(err);
      show("error", "Falha ao validar o código. Tente novamente.");
    }
  }

  // Etapa 3: salvar nova senha
  async function onSaveNewPass(e) {
    e.preventDefault();
    if (newPass.length < 6)
      return show(
        "warn",
        "A senha precisa ter ao menos 6 caracteres."
      );
    if (newPass !== confirmPass)
      return show("warn", "As senhas não coincidem.");

    try {
      const user = await findUser(email.trim());
      if (!user) return show("error", "Usuário não encontrado.");

      await fetch(`${API}/usuarios/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...user,
          senha: newPass,
          resetCode: null,
          resetExpires: null,
        }),
      });

      setStep("done");
      show(
        "success",
        "Senha alterada com sucesso! Redirecionando para o login…"
      );
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      show("error", "Não foi possível alterar a senha agora.");
    }
  }

  return (
    <div className="rec-container">
      <form
        className="rec-card"
        onSubmit={
          step === "email"
            ? onSendEmail
            : step === "code"
            ? onValidateCode
            : onSaveNewPass
        }
      >
        <img src="/logo.svg" alt="CodeQuest" className="rec-logo" />

        {ui.msg && (
          <div className={`rec-alert rec-${ui.type}`}>{ui.msg}</div>
        )}

        {step === "email" && (
          <>
            <h2>Recuperar senha</h2>
            <p>Informe seu e-mail para receber o código de verificação.</p>
            <input
              type="email"
              className="rec-input"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="rec-btn">Enviar código</button>
            <p className="rec-back">
              <Link to="/login">Voltar ao login</Link>
            </p>
          </>
        )}

        {step === "code" && (
          <>
            <h2>Verifique seu e-mail</h2>
            <p>Digite o código de 6 dígitos que te enviamos.</p>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              className="rec-input"
              placeholder="000000"
              value={code}
              onChange={(e) =>
                setCode(e.target.value.replace(/\D/g, ""))
              }
            />
            <button className="rec-btn">Validar código</button>
            <p className="rec-back">
              <button
                type="button"
                className="rec-link"
                onClick={() => setStep("email")}
              >
                Reenviar
              </button>
            </p>
          </>
        )}

        {step === "new" && (
          <>
            <h2>Defina a nova senha</h2>
            <input
              type="password"
              className="rec-input"
              placeholder="Nova senha"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <input
              type="password"
              className="rec-input"
              placeholder="Confirmar nova senha"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <button className="rec-btn">Confirmar</button>
            <p className="rec-back">
              <Link to="/login">Cancelar</Link>
            </p>
          </>
        )}

        {step === "done" && (
          <>
            <h2>Prontinho! 🎉</h2>
            <p>Senha atualizada com sucesso.</p>
          </>
        )}
      </form>
    </div>
  );
}
