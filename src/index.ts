import { sendEmail } from "./config/mailer";

async function main() {
  try {
    console.log("Enviando email con plantilla...");

    await sendEmail({
      to: "jugagd@gmail.com",
      subject: "Bienvenido a nuestra plataforma",
      template: "welcome",
      context: {
        title: "Bienvenido",
        appName: "Mi Aplicación",
        currentYear: new Date().getFullYear(),
        name: "Juan Pérez",
        email: "juan@example.com",
        verificationLink: "https://miapp.com/verify?token=abc123",
      },
    });

    console.log("Email con plantilla enviado con éxito!");
  } catch (error) {
    console.error("Error en la aplicación:", error);
  }
}

main();
