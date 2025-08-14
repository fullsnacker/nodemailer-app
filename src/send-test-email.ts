import { sendEmail } from "./config/mailer";

async function sendTestEmail() {
  try {
    console.log("Sending test email...");

    await sendEmail({
      to: "jugagd@gmail.com",
      subject: "Test Email from Server",
      template: "welcome",
      context: {
        title: "Test Email",
        name: "Test User",
        email: "jugagd@gmail.com",
        verificationLink: "https://yourapp.com/verify?token=test123",
        appName: process.env.APP_NAME || "Mi Aplicación",
      },
    });

    console.log("Test email sent successfully!");
  } catch (error) {
    console.error("Error sending test email:", error);
  }
}

sendTestEmail();
