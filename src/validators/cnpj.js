const utils = require("./utils");

const validateCnpj = utils.validData("cnpj");

/**
 * Valida o CNPJ
 * @param {string} value CNPJ a ser validado
 *
 * @returns {boolean}
 */
const validCNPJ = (value) => {
  // Isola apenas os dígitos na string
  value = utils.sanitizeValue(value);

  // verifica se o tamanho da string está correta
  if (!validateCnpj(value)) {
    return false;
  }

  const originalValue = value.substring(0, 12);
  const originalDigit = value.substring(12);
  let sumDigits1 =
    utils.sumDigits(originalValue, 5) + utils.sumDigits(originalValue, 9, 4);
  let digit1 = utils.getDV(sumDigits1);

  let sumDigits2 =
    utils.sumDigits(originalValue + digit1, 6) +
    utils.sumDigits(originalValue + digit1, 9, 5);
  let digit2 = utils.getDV(sumDigits2);

  // verifica se o dígito original é igual aos dígitos obtidos
  return originalDigit == `${digit1}${digit2}`;
};

module.exports = validCNPJ;
