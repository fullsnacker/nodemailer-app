import { create } from "express-handlebars";
import nodemailerExpressHandlebars from "nodemailer-express-handlebars";
import path from "path";

// Configuración corregida
export const configureHandlebars = (transporter: any) => {
  const hbsConfig = {
    viewEngine: {
      extname: ".hbs",
      layoutsDir: path.resolve(__dirname, "../templates/emails/"),
      partialsDir: path.resolve(__dirname, "../templates/partials/"),
      defaultLayout: "layout",
      helpers: {
        // Helpers personalizados si los necesitas
      },
    },
    viewPath: path.resolve(__dirname, "../templates/emails/"),
    extName: ".hbs",
  };

  transporter.use("compile", nodemailerExpressHandlebars(hbsConfig));
};
