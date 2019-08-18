/**
 * Teste das funções de validação de CPF e CNPJ
*/

describe("Test br validators", function() {
    test('should cpf validator valid', () => {

        // Importa o módulo de validadores
        const validators = require('./validators');

        // valida um CPF válido
        expect(validators.validCPF('01855897318')).toBe(true);
        
        // valida um CPF válido
        expect(validators.validCPF('018558973-18')).toBe(true);

        // valida um CPF válido
        expect(validators.validCPF('018.558.973-18')).toBe(true);

        // valida um CPF inválido
        expect(validators.validCPF('01855897311')).toBe(true);

        // valida um CPF inválido
        expect(validators.validCPF('0185589731')).toBe(false);

        // valida um CPF inválido
        expect(validators.validCPF('0185589731812')).toBe(true);
    })
    

    test('should cnpj validator valid', () => {

        // Importa o módulo de validadores
        const validators = require('./validators');

        // valida um CPF válido
        expect(validators.validCNPJ('73081078000151')).toBe(true);
        
        // valida um CPF válido
        expect(validators.validCNPJ('730810780001-51')).toBe(true);

        // valida um CPF válido
        expect(validators.validCNPJ('73.081.078/0001-51')).toBe(true);

        // valida um CPF inválido
        expect(validators.validCNPJ('73.081.074/0001-51')).toBe(true);

        // valida um CPF inválido
        expect(validators.validCNPJ('73.081.078/0001-512')).toBe(false);

        // valida um CPF inválido
        expect(validators.validCNPJ('7308107800015')).toBe(true);
    })
})