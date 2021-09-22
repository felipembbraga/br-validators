const utils = require("./utils");

const validateCpf = utils.validData("cpf");

/**
 * Valida o cpf
 * @param {string} value cpf a ser validado
 *
 * @returns {boolean}
 */
const validCPF = (value) => {
  // Isola apenas os dígitos na string
  value = utils.sanitizeValue(value);

  // verifica se o tamanho da string está correta
  if (!validateCpf(value)) {
    return false;
  }

  // pega os dígitos verificadores
  const originalValue = value.substring(0, 9);
  const originalDigit = value.substring(9);

  let digit1 = utils.getDV(utils.sumDigits(originalValue, 10));

  let digit2 = utils.getDV(utils.sumDigits(originalValue + digit1, 11));

  // verifica se o dígito original é igual aos dígitos obtidos
  return originalDigit == `${digit1}${digit2}`;
};

module.exports = validCPF;
