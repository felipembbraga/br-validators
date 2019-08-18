const VALID_DATA = {
  cpf: {
    length: 11,
    invalid: ["00000000000"]
  },
  cnpj: {
    length: 14,
    invalid: []
  }
};

/**
 * Isola os dígitos da string
 *
 * @param {String} value Valor a ser limpo
 */
const sanitizeValue = value => value.replace(/\D/g, "");

/**
 * Valida a string do documento
 * @param {String} validType tipo de validação. OPÇÕES: cpf | cnpj
 * @param {String} value string a ser validada
 */
const validData = validType => value =>
  value.length == VALID_DATA[validType].length &&
  !VALID_DATA[validType].invalid.find(v => v == value);

/**
 * Soma os dígitos do documento multiplicado pelo fator da posição
 * @param {string} value valor do documento
 * @param {Number} initialFactor valor inicial do fator de cálculo
 * @param {Number} initialPosition Posição inicial para ser feito o cálculo
 */
const sumDigits = (value, initialFactor, initialPosition = 0) => {
  let sum = 0;
  console.log(value, initialFactor, initialPosition);
  for (let i = initialFactor; i > 1; i--) {
    sum += parseInt(value[initialPosition + (initialFactor - i)]) * i;
  }
  console.log(sum);
  return sum;
};

/**
 * retorna o dígito verificador
 * @param {Number} value Valor da soma dos dígitos
 */
const getDV = value =>
  (11 - (value % 11) > 9 ? 0 : 11 - (value % 11)).toString();

module.exports = {
  sanitizeValue,
  validData,
  sumDigits,
  getDV
};
