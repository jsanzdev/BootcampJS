import { inspectIBAN } from "./motor";

const IBANentry = document.getElementById("iban");
const IBANresult = document.getElementById("IBAN-Result");

const showIBANRSULT = (iban: string) => {
  if (IBANresult && (IBANresult as HTMLDivElement)) {
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
  }
};

export const getIBANRESULT = () => {
  if (IBANentry && IBANentry instanceof HTMLInputElement) {
    showIBANRSULT(IBANentry.value);
  }
};

export const init = () => {
  if (IBANentry && IBANentry instanceof HTMLInputElement) {
    IBANentry.addEventListener("input", getIBANRESULT);
  }
};
