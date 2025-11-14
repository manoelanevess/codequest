import emailjs from "@emailjs/browser";

export function sendRecoveryEmail({ to_name, to_email, code }) {
  return emailjs.send(
    "service_ffo09au",
    "template_5wt5eic",
    {
      to_name,
      to_email,
      code,
    },
    "v_UWogbeqptKAt7vI"   // 👉 coloque sua PUBLIC KEY aqui
  );
}
