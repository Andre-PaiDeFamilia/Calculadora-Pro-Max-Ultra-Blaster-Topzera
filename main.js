// Pega o elemento do visor pelo ID
const display = document.getElementById('display');

// Função para adicionar números e operadores no visor
function appendCharacter(character) {
    display.value += character;
}

// Função para limpar o visor
function clearDisplay() {
    display.value = '';
}

// Função para calcular o resultado
function calculate() {
    try {
        // A função eval() executa a string como um código matemático do JS
        // (Nota: eval é ótimo para projetos simples assim)
        display.value = eval(display.value);
    } catch (error) {
        // Se o usuário digitar algo inválido (ex: "++2"), mostra Erro
        display.value = 'Erro';
    }
}
