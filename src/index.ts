import { sendEmail } from './config/mailer';

async function main() {
    try {
        console.log('Enviando email de prueba...');
        
        // Configura estos valores con tu información
        const toEmail = 'jugagd@gmail.com'; // Cambia por el email del destinatario
        const subject = 'Prueba de Nodemailer';
        const text = 'Hola Mundo desde Node.js, TypeScript y Nodemailer!';
        
        await sendEmail(toEmail, subject, text);
        
        console.log('Email enviado con éxito!');
    } catch (error) {
        console.error('Error en la aplicación:', error);
    }
}

main();
