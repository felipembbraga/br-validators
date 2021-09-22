/**
 * Isola os dígitos da string
 *
 * @param {String} value Valor a ser limpo
 */
export function sanitizeValue(value: string): string;
/**
 * Valida a string do documento
 * @param {String} validType tipo de validação. OPÇÕES: cpf | cnpj
 * @param {String} value string a ser validada
 */
export function validData(validType: string): (value: any) => boolean;
/**
 * Soma os dígitos do documento multiplicado pelo fator da posição
 * @param {string} value valor do documento
 * @param {Number} initialFactor valor inicial do fator de cálculo
 * @param {Number} initialPosition Posição inicial para ser feito o cálculo
 */
export function sumDigits(value: string, initialFactor: number, initialPosition?: number): number;
/**
 * retorna o dígito verificador
 * @param {Number} value Valor da soma dos dígitos
 */
export function getDV(value: number): string;
