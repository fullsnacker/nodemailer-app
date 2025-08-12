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
        appName: "Mailer",
        currentYear: new Date().getFullYear(),
        name: "Juan García",
        email: "jugagd@gmail.com",
        verificationLink: "https://miapp.com/verify?token=abc123",
      },
    });

    console.log("Email con plantilla enviado con éxito!");
  } catch (error) {
    console.error("Error en la aplicación:", error);
  }
}

main();
