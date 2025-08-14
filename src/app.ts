import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sendEmail } from "./config/mailer";
import { IEmailRequest } from "./interfaces/IEmailRequest";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Email service is running" });
});

// Email endpoint
app.post("/send-email", async (req, res) => {
  try {
    const emailData: IEmailRequest = req.body;

    // Validación básica
    if (!emailData.to || !emailData.subject || !emailData.template) {
      return res.status(400).json({
        error: "Missing required fields: to, subject or template",
      });
    }

    // Añadir valores por defecto al contexto si no están presentes
    emailData.context = {
      currentYear: new Date().getFullYear(),
      appName: process.env.APP_NAME || "Mi Aplicación",
      ...emailData.context,
    };

    // Enviar el email
    const result = await sendEmail(emailData);

    res.status(200).json({
      success: true,
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("Error in /send-email:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

// Manejo de errores
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
);

export default app;
