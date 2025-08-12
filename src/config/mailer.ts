import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

// Configuración del transporter para Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// Función para enviar emails
export const sendEmail = async (to: string, subject: string, text: string) => {
    try {
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            text
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado: ', info.messageId);
        return info;
    } catch (error) {
        console.error('Error al enviar el email: ', error);
        throw error;
    }
};
