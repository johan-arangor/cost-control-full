const templatesHTML = {};
const headTemplate = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Financify - Password Reset Request</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
            }
            .card {
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
                padding: 24px;
                box-sizing: border-box;
            }
            .card-header {
                text-align: center;
                margin-bottom: 24px;
            }
            .logo {
                background-color: #2563eb;
                color: white;
                width: 64px;
                height: 64px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                margin: 0 auto 16px;
            }
            .card-title {
                font-size: 24px;
                font-weight: bold;
                margin: 0 0 8px;
            }
            .card-description {
                color: #6b7280;
                margin: 0;
            }
            .card-content {
                text-align: center;
                margin-bottom: 24px;
            }
            .button {
                background-color: #2563eb;
                color: white;
                border: none;
                border-radius: 4px;
                padding: 10px 16px;
                font-size: 16px;
                cursor: pointer;
                text-decoration: none;
                display: inline-block;
            }
            .button:hover {
                background-color: #1d4ed8;
            }
            .card-footer {
                text-align: center;
                font-size: 14px;
                color: #6b7280;
            }
        </style>
    </head>
`;

templatesHTML.renewPasswordHtml = (jwtLink) => {
    return(
        `
        <!DOCTYPE html>
            <html lang="en">
            ${headTemplate}
            <body>
                <div class="card">
                    <div class="card-header">
                        <div class="logo">$</div>
                        <h1 class="card-title">Financify</h1>
                        <p class="card-description">Solicitud de cambio de contraseña</p>
                    </div>
                    <div class="card-content">
                        <p>Tu tienes una solicitud de cambio de tu contraseña. Por favor da click en el botón y procede con el cambio de contraseña:</p>
                        <a href="${jwtLink}" class="button">Reestablecer Contraseña</a>
                    </div>
                    <div class="card-footer">
                        <p>Si tu no solicitaste es cambio de contraseña, por favor ignora este mensaje o contacta con soporte.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    );
}

templatesHTML.confirmEmail = (jwtLink) => {
    return (
        `
        <!DOCTYPE html>
            <html lang="en">
            ${headTemplate}
            <body>
                <div class="card">
                    <div class="card-header">
                        <div class="logo">$</div>
                        <h1 class="card-title">Financify</h1>
                        <p class="card-description">Creación de cuenta</p>
                    </div>
                    <div class="card-content">
                        <p>Tu tienes una solicitud para crear una cuenta. Por favor da click en el botón y procede con la confirmación y creación de cuenta:</p>
                        <a href="${jwtLink}" class="button">Crear Cuenta</a>
                    </div>
                    <div class="card-footer">
                        <p>Si tu no solicitaste crear esta cuenta, por favor ignora este mensaje o contacta con soporte.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    );
}

templatesHTML.confirmCreateUser = (link) => {
    return (
        `
        <!DOCTYPE html>
            <html lang="en">
            ${headTemplate}
            <body>
                <div class="card">
                    <div class="card-header">
                        <div class="logo">$</div>
                        <h1 class="card-title">Financify</h1>
                        <p class="card-description">Cuenta verificada</p>
                    </div>
                    <div class="card-content">
                        <p>Hemos confirmado tu cuenta. Puedes ingresar a Financify dando clic en el botón.</p>
                        <a href="${jwtLink}" class="button">Iniciar Sesión</a>
                    </div>
                    <div class="card-footer">
                        <p>Si tu no confirmaste está cuenta, por favor ignora este mensaje o contacta con soporte.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    );
}

module.exports = templatesHTML;