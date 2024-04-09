import { IBAN, bankCodes } from "./model";
import { validateIBAN } from "ibantools";

const IBAN_REGEX =
  /^([A-Z]{2})(\d{2})[-\s]?(\d{4})[-\s]?(\d{4})[-\s]?(\d{2})[-\s]?(\d{10})$/;

const disectIBAN = (iban: string): IBAN => {
  const parts = IBAN_REGEX.exec(iban);
  if (!parts) {
    throw new Error("Invalid IBAN");
  }
  return {
    countryCode: parts[1],
    bankCode: getBankName(parts[3]),
    branchCode: parts[4],
    controlDigit: parts[5],
    accountNumber: parts[6],
  };
};

export const getBankName = (code: string): string => {
  return bankCodes.get(code) || "Desconocido";
};

const IBANValidation = (iban: string) => {
  return validateIBAN(iban);
};

export const inspectIBAN = (iban: string): IBAN => {
  if (!IBANValidation(iban)) {
    throw new Error("IBAN incorrecto");
  }
  return disectIBAN(iban);
};
