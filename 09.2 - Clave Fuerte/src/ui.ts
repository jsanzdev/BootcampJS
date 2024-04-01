import { passwordValidation } from "./motor";
import { commonPasswords } from "./model";

const passwordDIV = document.getElementById("password");
const usernameDIV = document.getElementById("username");

// we listen to the input event on the password and username fields

const checkPasswordValidation = (password: string, username: string) => {
  const validation = passwordValidation(password, username, commonPasswords);

  // if the password is invalid, we show the error message
  if (!validation.esValida) {
    console.log(validation.error);
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
