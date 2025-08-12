import { create } from "express-handlebars";
import nodemailerExpressHandlebars from "nodemailer-express-handlebars";
import path from "path";

const hbs = create({
  partialsDir: [path.resolve(__dirname, "../templates/partials/")],
  extname: ".hbs",
  defaultLayout: false,
});

export const configureHandlebars = (transporter: any) => {
  transporter.use(
    "compile",
    nodemailerExpressHandlebars({
      viewEngine: hbs,
      viewPath: path.resolve(__dirname, "../templates/emails/"),
      extName: ".hbs",
    })
  );
};
