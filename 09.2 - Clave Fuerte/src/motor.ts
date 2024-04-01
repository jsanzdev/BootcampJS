import { PasswordValidation } from "./model";

export function validarpassword(
  password: string,
  username: string,
  commonPasswords: string[]
): PasswordValidation {
  const validaciones = [
    tieneLongitudMinima(password),
    tieneMayusculasYMinusculas(password),
    tieneNumeros(password),
    tieneCaracteresEspeciales(password),
    tieneNombreUsuario(password, username),
    tienePalabrasComunes(password, commonPasswords),
  ];

  const validacionFallida = validaciones.find(
    (validacion) => !validacion.esValida
  );

  if (validacionFallida) {
    return validacionFallida;
  } else {
    return {
      esValida: true,
    };
  }
}

const tieneMayusculasYMinusculas = (password: string): PasswordValidation => {
  if (
    password.toLowerCase() === password ||
    password.toUpperCase() === password
  ) {
    return {
      esValida: false,
      error:
        "La password debe contener al menos una letra mayúscula y una minúscula",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
const tieneNumeros = (password: string): PasswordValidation => {
  if (!/[0-9]/.test(password)) {
    return {
      esValida: false,
      error: "La password debe contener al menos un número",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
const tieneCaracteresEspeciales = (password: string): PasswordValidation => {
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return {
      esValida: false,
      error: "La password debe contener al menos un caracter especial",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

const tieneLongitudMinima = (password: string): PasswordValidation => {
  if (password.length < 8) {
    return {
      esValida: false,
      error: "La password debe tener al menos 8 caracteres",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

const tieneNombreUsuario = (
  nombreUsuario: string,
  password: string
): PasswordValidation => {
  if (password.includes(nombreUsuario)) {
    return {
      esValida: false,
      error: "La password no puede contener el nombre de usuario",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

const tienePalabrasComunes = (
  password: string,
  commonPasswords: string[]
): PasswordValidation => {
  if (commonPasswords.includes(password)) {
    return {
      esValida: false,
      error: "La password no puede ser una password común",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
