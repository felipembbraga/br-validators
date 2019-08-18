/**
 * Valida o CNPJ
 * @param {string} value CNPJ a ser validado
 *
 * @returns {boolean}
 */
const validCNPJ = value => {
  // Isola apenas os dígitos na string
  value = value.replace(/\D/g, "");
  let digit;

  // verifica se o tamanho da string está correta
  if (value.length !== 14) {
    return false;
  }

  // pega os dígitos verificadores
  const originalDigit = value.substring(12);

  // Calcula o primeiro dígito
  let somaDigit1 = 0;
  for (let i = 5; i > 1; i--) {
    digit = parseInt(value[5 - i]);
    somaDigit1 += digit * i;
  }

  for (let i = 9; i > 1; i--) {
    digit = parseInt(value[4 + (9 - i)]);
    somaDigit1 += digit * i;
  }
  let digit1 = 11 - (somaDigit1 % 11);
  if (digit1 > 9) {
    digit1 = 0;
  }

  // Calcula o segundo dígito
  let somaDigit2 = 0;
  let value2 = value + digit1;
  for (let i = 6; i > 1; i--) {
    digit = parseInt(value2[6 - i]);
    somaDigit2 += digit * i;
  }
  for (let i = 9; i > 1; i--) {
    digit = parseInt(value2[5 + (9 - i)]);
    somaDigit2 += digit * i;
  }
  let digit2 = 11 - (somaDigit2 % 11);
  if (digit2 > 9) {
    digit2 = 0;
  }

  // verifica se o dígito original é igual aos dígitos obtidos
  return originalDigit == `${digit1}${digit2}`;
};

module.exports = validCNPJ;
