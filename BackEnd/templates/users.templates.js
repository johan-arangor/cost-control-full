const templatesHTML = {};

templatesHTML.renewPasswordHtml = (jwtLink) => {
    return(
        `
                <!DOCTYPE html>
                <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
                    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                </head>
                <body>
                    <br>
                    <h1><a href="${jwtLink}">click para cambiar tu contraseña</a></h1>
                </body>
        `
    );
}

templatesHTML.confirmEmail = (jwtLink) => {
    return (
        `
                <!DOCTYPE html>
                <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
                    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                </head>
                <body>
                    <br>
                    <h1><a href="${jwtLink}">click para confirmar cuenta</a></h1>
                </body>
        `
    );
}

templatesHTML.confirmCreateUser = (link) => {
    return (
        `
                <!DOCTYPE html>
                <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
                    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                </head>
                <body>
                    <br>
                    <h1><a href="${link}">ingresar a mi cuenta</a></h1>
                </body>
        `
    );
}

module.exports = templatesHTML;