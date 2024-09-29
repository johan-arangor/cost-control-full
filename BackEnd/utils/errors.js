const errors = {
    GENERAL: {
      ERROR: {
        title: 'Error',
        text: 'Ocurrió un error inesperado',
        type: 'error',
      },
      INVALID_REQUEST: {
        title: 'Error',
        text: 'La solicitud es inválida',
        type: 'error',
      },
      NOT_FOUND: {
        title: 'Error',
        text: 'No se encontró el recurso solicitado',
        type: 'error',
      },
    },
    AUTH: {
      INVALID_CREDENTIALS: {
        title: 'Error de autenticación',
        text: 'Credenciales inválidas',
        type: 'error',
      },
      USER_NOT_FOUND: {
        title: 'Error de autenticación',
        text: 'No se encontró el usuario',
        type: 'error',
      },
      PASSWORD_INCORRECT: {
        title: 'Error de autenticación',
        text: 'Contraseña incorrecta',
        type: 'error',
      },
    },
    VALIDATION: {
      ERROR: {
        title: 'Error de validación',
        text: 'Error de validación',
        type: 'error',
      },
      REQUIRED: {
        title: 'Error de validación',
        text: 'Campo requerido',
        type: 'error',
      },
    },
    DB: {
      ERROR: {
        title: 'Error de base de datos',
        text: 'Ocurrió un error en la base de datos',
        type: 'error',
      },
      NOT_FOUND: {
        title: 'Error de base de datos',
        text: 'No se encontró el registro en la base de datos',
        type: 'error',
      },
    },
    DYNAMIC_ERROR: (title, text, type) => {
      return {
        title,
        text,
        type,
      };
    },
  };
  
  module.exports = errors;