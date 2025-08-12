export interface IEmailRequest {
  to: string;
  subject: string;
  template: string;
  context: {
    title?: string;
    appName?: string;
    currentYear?: number;
    [key: string]: any; // Permite propiedades dinámicas adicionales
  };
}
