const responses = {
    RESPONSE_CREATE_USER: {
        title: "Usuario creado con exito",
        text: "Se ha creado el usuario correctamente",
        icon: "success"
    },
    RESPONSE_SESSION_USER: {
        title: "Sesión iniciada con exito",
        text: "Se ha iniciado la sesión correctamente",
        icon: "success"
    },
    RESPONSE_CHANGE_PASSWORD: {
        title: "Contraseña cambiada con exito",
        text: "Se ha cambiado la contraseña correctamente",
        icon: "success"
    },
    RESPONSE_CREATE_ACOUNT: {
        title: "Cuenta creada con exito",
        text: `Se ha enviado un email a su correo electronico con un link para confirmar su cuenta`,
        icon: "success"
    },
    RESPONSE_RECOVER_ACCOUNT: {
        title: "Recuperación de cuenta enviada con exito",
        text: `Se ha enviado un email a su correo electronico con un link para realizar el cambio de contraseña de su cuenta`,
        icon: "success"
    },
    RESPONSE_DATA: (status, data) => {
        return {
          status,
          data
        };
    },
    RESPONSE_DATA_MESSAGE: (data, message) => {
        return {
          data,
          message
        };
    },
    RESPONSE_AUTH: (data) => {
        return data;
    },
    CREATE_DINAMIC: (nameTable) => {
        return {
            title: `${nameTable} creada con exito`,
            text: `Se ha creado ${nameTable} de manera exitosa.`,
            icon: "success"
        }
    },
    UPDATE_DINAMIC: (nameTable) => {
        return {
            title: `${nameTable} editado con exito`,
            text: `Se ha editado ${nameTable} de manera exitosa.`,
            icon: "success"
        }
    },
    DELETE_DINAMIC: (nameTable) => {
        return {
            title: `${nameTable} eliminada con exito`,
            text: `Se ha eliminado ${nameTable} de manera exitosa.`,
            icon: "success"
        }
    }
}

module.exports = responses;