import { passwordValidation } from "./motor";
import { commonPasswords } from "./model";

const passwordDIV = document.getElementById("password");
const usernameDIV = document.getElementById("username");
const errorSpan = document.getElementById("error");

// we listen to the input event on the password and username fields

const checkPasswordValidation = (password: string, username: string) => {
  const validation = passwordValidation(password, username, commonPasswords);

  // if the password is invalid, we show the error message
  if (!validation.esValida) {
    if (errorSpan && errorSpan instanceof HTMLSpanElement) {
      errorSpan.innerHTML = validation.error!;
    }
  } else {
    const errorDiv = document.getElementById("error");
    if (errorDiv) {
      errorDiv.textContent = "";
    }
  }
};

export const checkPassword = () => {
  if (
    passwordDIV &&
    passwordDIV instanceof HTMLInputElement &&
    usernameDIV &&
    usernameDIV instanceof HTMLInputElement
  ) {
    passwordDIV.addEventListener("input", () => {
      checkPasswordValidation(passwordDIV.value, usernameDIV.value);
    });

    usernameDIV.addEventListener("input", () => {
      checkPasswordValidation(passwordDIV.value, usernameDIV.value);
    });
  }
};
