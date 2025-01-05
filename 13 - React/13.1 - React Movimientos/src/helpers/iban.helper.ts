export const generateIBAN = (): string => {
  const countryCode = "ES";
  const digits = Array.from({ length: 22 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

  return `${countryCode}${digits}`;
};
