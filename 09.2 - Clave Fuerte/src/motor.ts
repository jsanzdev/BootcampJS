import { PasswordValidation } from "./model";

export const containsUpperAndLowerCase = (
  password: string
): PasswordValidation => {
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
export const containsNumbers = (password: string): PasswordValidation => {
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
export const containsSpecialCharacters = (
  password: string
): PasswordValidation => {
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

export const containsMinimumLength = (password: string): PasswordValidation => {
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

export const containsUsername = (
  password: string,
  username: string
): PasswordValidation => {
  const lowerCasePassword = password.toLowerCase();
  // Split the username into parts, so that we can check if the password contains any of them (between words and numbers. Example: "jesus123" -> ["jesus", "123"])
  const usernameParts = username.toLowerCase().split(/(\d+)/).filter(Boolean);
  if (usernameParts.some((part) => lowerCasePassword.includes(part))) {
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

export const containsCommonWords = (
  password: string,
  commonPasswords: string[]
): PasswordValidation => {
  const lowerCasePassword = password.toLowerCase();
  if (
    commonPasswords.some((commonPassword) =>
      lowerCasePassword.includes(commonPassword.toLowerCase())
    )
  ) {
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

export const passwordValidation = (
  password: string,
  username: string,
  commonPasswords: string[]
): PasswordValidation => {
  const validations = [
    containsMinimumLength(password),
    containsUpperAndLowerCase(password),
    containsNumbers(password),
    containsSpecialCharacters(password),
    containsUsername(password, username),
    containsCommonWords(password, commonPasswords),
  ];

  const failedValidations = validations.filter(
    (validacion) => !validacion.esValida
  );
  if (failedValidations.length > 0) {
    return failedValidations[0];
  } else {
    return {
      esValida: true,
    };
  }
};
