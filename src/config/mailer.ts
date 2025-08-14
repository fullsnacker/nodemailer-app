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

export const sendEmail = async (emailData: IEmailRequest) => {
  try {
    const mailOptions = {
      from: `"${emailData.context.appName || "Mi Aplicación"}" <${
        process.env.GMAIL_USER
      }>`,
      to: emailData.to,
      subject: emailData.subject,
      template: emailData.template,
      context: emailData.context,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(
      `Email sent to ${emailData.to} with template ${emailData.template}`
    );
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
