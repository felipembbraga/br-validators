/**
 * Valida o cpf
 * @param {string} value cpf a ser validado
 *
 * @returns {boolean}
 */
const validCPF = value => {
  // Isola apenas os dígitos na string
  value = value.replace(/\D/g, "");

  // verifica se o tamanho da string está correta
  if (value.length !== 11) {
    return false;
  }

  // pega os dígitos verificadores
  const originalDigit = value.substring(9);

  // Calcula o primeiro dígito
  let somaDigit1 = 0;
  for (let i = 10; i > 1; i--) {
    let digit = parseInt(value[10 - i]);
    somaDigit1 += digit * i;
  }
  let digit1 = 11 - (somaDigit1 % 11);
  if (digit1 > 9) {
    digit1 = 0;
  }

  // Calcula o segundo dígito
  let somaDigit2 = 0;
  let value2 = value + digit1;
  for (let i = 11; i > 1; i--) {
    let digit = parseInt(value2[11 - i]);
    somaDigit2 += digit * i;
  }
  let digit2 = 11 - (somaDigit2 % 11);
  if (digit2 > 9) {
    digit2 = 0;
  }

  // verifica se o dígito original é igual aos dígitos obtidos
  return originalDigit == `${digit1}${digit2}`;
};

module.exports = validCPF;
