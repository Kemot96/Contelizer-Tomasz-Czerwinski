function calculatePeselChecksum(pesel: string) {
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const peselDigits = pesel.split('').slice(0, 10).map(Number);
  let checksum = 0;

  peselDigits.forEach((digit, index) => {
    checksum += (digit * weights[index]) % 10;
  });

  checksum = 10 - (checksum % 10);

  return checksum === 10 ? 0 : checksum;
}

export function validatePesel(pesel: string) {
  const checksum = calculatePeselChecksum(pesel);
  const lastDigit = Number(pesel.slice(-1));

  return checksum === lastDigit;
}
