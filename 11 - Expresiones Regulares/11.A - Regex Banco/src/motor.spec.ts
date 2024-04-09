import { validateIBAN } from "ibantools";
import { inspectIBAN, getBankName } from "./motor";

describe("We Test that IBANs are valid", () => {
  it("IBAN without spaces", () => {
    // Arrange
    const iban = "ES2114650100722030876293";

    // Act

    const result = validateIBAN(iban);

    // Assert
    expect(result).toBeTruthy();
  });
  it("IBAN with spaces", () => {
    // Arrange
    const iban = "ES21 1465 0100 7220 3087 6293";

    // Act

    const result = validateIBAN(iban);

    // Assert
    expect(result).toBeTruthy();
  });
  it("IBAN with dashes", () => {
    // Arrange
    const iban = "ES21-1465-0100-7220-3087-6293";

    // Act

    const result = validateIBAN(iban);

    // Assert
    expect(result).toBeTruthy();
  });
});

describe("We test that we can extract the IBAN parts", () => {
  it("IBAN without spaces", () => {
    // Arrange
    const iban = "ES2114650100722030876293";

    //Act

    const result = inspectIBAN(iban);

    // Assert
    expect(result).toEqual({
      countryCode: "ES",
      bankCode: "ING Bank NV",
      branchCode: "0100",
      controlDigit: "72",
      accountNumber: "2030876293",
    });
  });
});

describe("We test bank names", () => {
  it("Bank name exists", () => {
    // Arrange
    const bankCode = "1465";

    // Act

    const result = getBankName(bankCode);

    // Assert
    expect(result).toEqual("ING Bank NV");
  });
  it("Bank name does not exist", () => {
    // Arrange
    const bankCode = "0000";

    // Act

    const result = getBankName(bankCode);

    // Assert
    expect(result).toEqual("Desconocido");
  });
});
