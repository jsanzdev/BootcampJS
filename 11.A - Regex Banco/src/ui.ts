import { inspectIBAN } from "./motor";

const IBANentry = document.getElementById("iban") as HTMLInputElement;
const IBANresult = document.getElementById("IBAN-Result") as HTMLDivElement;

const showIBANRSULT = (iban: string) => {
  try {
    const ibanData = inspectIBAN(iban);
    // show as a list
    IBANresult.innerHTML = `
      <ul>
        <li>El IBAN es Valido</li>
        <li>Country code: ${ibanData.countryCode}</li>
        <li>Bank code: ${ibanData.bankCode}</li>
        <li>Branch code: ${ibanData.branchCode}</li>
        <li>Control digit: ${ibanData.controlDigit}</li>
        <li>Account number: ${ibanData.accountNumber}</li>
      </ul>
    `;
  } catch (error) {
    IBANresult.textContent = "IBAN incorrecto";
  }
};

export const getIBANRESULT = () => {
  showIBANRSULT(IBANentry.value);
};

export const init = () => {
  IBANentry.addEventListener("input", getIBANRESULT);
};
