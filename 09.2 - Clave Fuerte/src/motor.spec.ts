import { containsCommonWords, containsUsername } from "./motor";
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
});
