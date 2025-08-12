import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { configureHandlebars } from "./handlebars.config";
import { IEmailRequest } from "../interfaces/IEmailRequest";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Configurar Handlebars
configureHandlebars(transporter);

interface EmailOptions {
  to: string;
  subject: string;
  template: string;
  context: Record<string, any>;
}

export const sendEmail = async (emailData: IEmailRequest) => {
  try {
    // Contexto mínimo requerido para los partials
    const fullContext = {
      appName: process.env.APP_NAME || "Mi Aplicación",
      currentYear: new Date().getFullYear(),
      unsubscribeLink: "#",
      contactLink: "#",
      ...emailData.context,
    };

    const mailOptions = {
      from: `"${fullContext.appName}" <${process.env.GMAIL_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      template: emailData.template,
      context: fullContext,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
