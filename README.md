# 📧 Email Service con Node.js, TypeScript y Nodemailer

Un servicio para enviar emails con plantillas usando Node.js, TypeScript y Nodemailer, con soporte para plantillas Handlebars y componentes reutilizables.

## 🚀 Características principales

- ✅ Envío de emails con plantillas personalizadas
- ✅ Soporte para componentes reutilizables (partials)
- ✅ Configuración sencilla con variables de entorno
- ✅ Tipado fuerte con TypeScript
- ✅ Plantillas responsive para múltiples dispositivos

## 📦 Prerequisitos

- Node.js (v16 o superior)
- npm (v8 o superior)
- Cuenta de Gmail (para el envío)

## 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/fullsnacker/nodemailer-app.git
cd nodemailer-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales.

## ⚙️ Configuración

Configura estas variables en tu archivo `.env`:

```ini
GMAIL_USER=tu-email@gmail.com
GMAIL_PASS=tu-contraseña-o-app-password
APP_NAME="Mi Aplicación"  # Opcional
```

## 🚦 Uso básico

Ejecuta el envío de un email de prueba:

```bash
npm start
```

O usa el script de prueba:

```bash
npm run test:email
```

## 🎨 Estructura de plantillas

```
templates/
├── emails/
│   ├── layout.hbs       # Layout base
│   ├── welcome.hbs      # Plantilla de bienvenida
│   └── notification.hbs # Plantilla de notificación
└── partials/
    ├── header.hbs       # Cabecera reutilizable
    └── footer.hbs       # Pie de página reutilizable
```

## 📝 Crear nuevas plantillas

1. Añade tu nueva plantilla en `templates/emails/`
2. Usa los partials existentes con `{{> header}}` y `{{> footer}}`
3. Define las variables necesarias en el contexto

## 🔍 Próximos pasos

- [ ] Implementar servidor Express con endpoints REST
- [ ] Añadir autenticación para los endpoints
- [ ] Implementar sistema de colas para envíos masivos
- [ ] Añadir sistema de logging
- [ ] Configurar Docker para el despliegue

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor abre un issue primero para discutir los cambios propuestos.

## 📄 Licencia

MIT © fullsnacker
