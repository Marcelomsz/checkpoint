let microondas = (prato, tempo) => {
    switch (prato) /*usando switch pra verificar qual foi a opção escolhida de prato */ {
        case 1:
            if ((tempo >= 10) & (tempo < 20)) /* aqui o if pra ver se o tempo escolhido é o que quero para esse retorno */ 
            {
                return 'Pipoca pronta, bom apetite!!!'
            }
            if ((tempo >= 20) & (tempo < 30)) /*usando maior ou igual pra especificar quais numeros quero para esse retorno , no caso numeros maiores ou iguais a 20 e menores que 30*/ 
            {
                return 'A Pipoca queimou'
            }
            if (tempo < 10) {
                return 'Tempo insuficiente para o preparo da Pipoca'
            }
            if (tempo >= 30) {
                return 'kabumm'
            }
            else /*aqui quero os numeros, strings ou qualquer valor que nao entre nas outras especificações de tempo*/
                return 'Tempo indeterminado , usando tempo padrão , Pipoca pronta, bom apetite!!!'

            break;
        case 2:
            if ((tempo >= 8) & (tempo < 16)) {
                return 'Macarrão pronto, bom apetite!!!'
            }
            if ((tempo >= 16) & (tempo < 24)) {
                return 'O Macarrão queimou'
            }
            if (tempo < 8) {
                return 'Tempo insuficiente para o preparo do Macarrão'
            }
            if (tempo >= 24) {
                return 'kabumm'
            }
            else
                return 'Tempo indeterminado , usando tempo padrão , Macarrão pronto, bom apetite!!!'

            break;
        case 3:
            if ((tempo >= 15) & (tempo < 30)) {
                return 'Carne pronta, bom apetite!!!'
            }
            if ((tempo >= 30) & (tempo < 45)) {
                return 'A Carne queimou'
            }
            if (tempo < 15) {
                return 'Tempo insuficiente para o preparo da Carne'
            }
            if (tempo >= 45) {
                return 'kabumm'
            }
            else
                return 'Tempo indeterminado , usando tempo padrão , Carne pronta, bom apetite!!!'

            break;
        case 4:
            if ((tempo >= 12) & (tempo < 24)) {
                return 'Feijão pronto, bom apetite!!!'
            }
            if ((tempo >= 24) & (tempo < 36)) {
                return 'O Feijão queimou'
            }
            if (tempo < 12) {
                return 'Tempo insuficiente para o preparo do Feijão'
            }
            if (tempo >= 36) {
                return 'kabumm'
            }
            else
                return 'Tempo indeterminado , usando tempo padrão , Feijão pronto, bom apetite!!!'

            break;
        case 5:
            if ((tempo >= 8) & (tempo < 16)) {
                return 'Brigadeiro pronto, bom apetite!!!'
            }
            if ((tempo >= 16) & (tempo < 24)) {
                return 'O Brigadeiro queimou'
            }
            if (tempo < 16) {
                return 'Tempo insuficiente para o preparo do Brigadeiro'
            }
            if (tempo >= 24) {
                return 'kabumm'
            }
            else
                return 'Tempo indeterminado , usando tempo padrão , Brigadeiro pronto, bom apetite!!!'

            break;
        default: /* aqui quero o que retorne caso o prato nao exista */
        return "Prato inexistente"
            break;
    }

}

//menu//
console.log('opção - 1 - Pipoca – 10 segundos (padrão)' + '\n' +
    'opção - 2 - Macarrão – 8 segundos (padrão)' + '\n' +
    'opção - 3 - Carne – 15 segundos (padrão)' + '\n' +
    'opção - 4 - Feijão – 12 segundos (padrão)' + '\n' +
    'opção - 5 - Brigadeiro – 8 segundos (padrão)')
console.log(' ')

console.log(microondas(3, 7)) //teste opção 3 , com tempo de 7 segundos ; resultado esperado : Tempo insuficiente para o preparo da Carne //
console.log(microondas(3, 50)) //teste opção 3 , com tempo de 40 segundos ; resultado esperado : kabumm//
console.log(' ')

console.log(microondas(4, 10)) //teste opção 4 , com tempo de 10 segundos ; resultado esperado : Tempo insuficiente para o preparo do Feijão //
console.log(microondas(4)) //teste opção 4 , sem tempo ; resultado esperado : Tempo indeterminado , usando tempo padrão , Feijão pronto, bom apetite!!!//
console.log(' ')

console.log(microondas(1, 10)) //teste opção 1 , com tempo de 10 segundos ; resultado esperado :Pipoca pronta, bom apetite!!!//
console.log(microondas(1, 20)) //teste opção 1 , com tempo de 20 segundos ; resultado esperado : A Pipoca queimou//
console.log(' ')

console.log(microondas(2, 4)) //teste opção 2 , com tempo de 8 segundos ; resultado esperado : Tempo insuficiente para o preparo do Macarrão//
console.log(microondas(2, 'p')) //teste opção 2 , com tempo = 'p' ; resultado esperado : Tempo indeterminado , usando tempo padrão , Macarrão pronto, bom apetite!!!//
console.log(' ')

console.log(microondas(5, 14)) //teste opção 5 , com tempo de 14 segundos ; resultado esperado : Brigadeiro pronto, bom apetite!!! //
console.log(microondas(5, 24)) //teste opção 5 , com tempo de 7 segundos ; resultado esperado : kabumm//
console.log(' ')

console.log(microondas('sorvete', 7)) //teste opção sorvete , com tempo de 7 segundos ; resultado esperado : Prato inexistente//
console.log(microondas(6, 50)) //teste opção 6 , com tempo de 50 segundos ; resultado esperado : Prato inexistente//