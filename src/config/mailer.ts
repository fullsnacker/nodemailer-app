import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { configureHandlebars } from "./handlebars.config";

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

export const sendEmail = async (options: EmailOptions) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: options.to,
      subject: options.subject,
      template: options.template,
      context: options.context,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado: ", info.messageId);
    return info;
  } catch (error) {
    console.error("Error al enviar el email: ", error);
    throw error;
  }
};
