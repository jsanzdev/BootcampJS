import {
  containsCommonWords,
  containsMinimumLength,
  containsNumbers,
  containsSpecialCharacters,
  containsUpperAndLowerCase,
  containsUsername,
  passwordValidation,
} from "./motor";
import { commonPasswords } from "./model";

describe("Password Validation Testing.", () => {
  it("Common Words Test 1", () => {
    // Arrange

    const password = "password";

    // Act

    const result = containsCommonWords(password, commonPasswords);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Common Words Test 2", () => {
    // Arrange

    const password = "password123";

    // Act

    const result = containsCommonWords(password, commonPasswords);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Common Words Test 3", () => {
    // Arrange

    const password = "1234sdsf";

    // Act

    const result = containsCommonWords(password, commonPasswords);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Common Words Test 4", () => {
    // Arrange

    const password = "1234";

    // Act

    const result = containsCommonWords(password, commonPasswords);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Common Words Test 5", () => {
    // Arrange

    const password = "1234admin%$@@AA";

    // Act

    const result = containsCommonWords(password, commonPasswords);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Contains username Test 1", () => {
    // Arrange

    const password = "admin12345";
    const username = "admin";

    // Act

    const result = containsUsername(password, username);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Contains username Test 2", () => {
    // Arrange

    const password = "B{Lo@M=0IgX3,Ysi,O4yadmin";
    const username = "admin1234";

    // Act
    const result = containsUsername(password, username);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Contains username Test 3", () => {
    // Arrange

    const password = "Jesus!@#87hh";
    const username = "jesussanz";

    // Act
    const result = containsUsername(password, username);

    // Assert
    expect(result.esValida).toBeTruthy();
  });
  it("Contains case sensitive", () => {
    // Arrange

    const password = "Jesus!@#87hh";

    // Act
    const result = containsUpperAndLowerCase(password);

    // Assert

    expect(result.esValida).toBeTruthy();
  });
  it("Contains special characters", () => {
    // Arrange

    const password = "u32uhu32hr2h3";

    // Act

    const result = containsSpecialCharacters(password);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Contains a number", () => {
    // Arrange

    const password = "u32uhu32hr2h3";

    // Act

    const result = containsNumbers(password);

    // Assert
    expect(result.esValida).toBeTruthy();
  });
  it("Minumum length False", () => {
    // Arrange

    const password = "12345";

    // Act
    const result = containsMinimumLength(password);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
  it("Minumum length True", () => {
    // Arrange

    const password = "12345678";

    // Act
    const result = containsMinimumLength(password);

    // Assert
    expect(result.esValida).toBeTruthy();
  });
  it("Full password validation True", () => {
    // Arrange

    const password = "B{Lo@M=0IgX3,Ysi,O4y";
    const username = "admin1234";

    // Act

    const result = passwordValidation(password, username, commonPasswords);

    // Assert
    expect(result.esValida).toBeTruthy();
  });
  it("Full password validation False", () => {
    // Arrange

    const password = "Admin1234!!";
    const username = "admin1234";

    // Act

    const result = passwordValidation(password, username, commonPasswords);

    // Assert
    expect(result.esValida).toBeFalsy();
  });
});
