// ============================================
// SCRIPT: Sortear Cores ao Passar o Mouse
// ============================================

// PASSO 1: Criar um Array com as Cores Disponíveis
// ================================================
// O que é um Array? É uma LISTA que armazena vários valores em ordem
// Sintaxe: const nomeDoArray = [valor1, valor2, valor3, ...]

const cores = [
    '#7bd474',  // Verde
    '#4170ff',  // Azul
    '#52bbde',  // Ciano
    '#0447ff'   // Azul Royal
];

// Agora o JavaScript sabe que existem 4 cores disponíveis
// Você pode acessá-las assim:
// cores[0] = '#7bd474' (primeira cor)
// cores[1] = '#4170ff' (segunda cor)
// cores[2] = '#52bbde' (terceira cor)
// cores[3] = '#0447ff' (quarta cor)
// cores.length = 4 (quantidade total de cores)


// PASSO 2: Criar uma Função que Sorteia Uma Cor Aleatória
// ========================================================
// O que é uma Função? É um bloco de código que pode ser usado várias vezes
// Sintaxe: function nomeDaFuncao() { ... }

function sortearCor() {
    // Math.random() = gera um número ALEATÓRIO entre 0 e 1
    // Exemplo: 0.234, 0.789, 0.512, etc.
    const numeroAleatorio = Math.random();
    // console.log(numeroAleatorio); // Descomente para ver o número
    
    // Agora multiplicamos pelo tamanho do array (4)
    // Se Math.random() = 0.5, então: 0.5 * 4 = 2
    // Assim o resultado fica entre 0 e 4
    const numeroMultiplicado = numeroAleatorio * cores.length;
    // console.log(numeroMultiplicado); // Descomente para ver
    
    // Math.floor() = arredonda PARA BAIXO para um número inteiro
    // Exemplo: 2.9 vira 2 | 3.1 vira 3 | 0.5 vira 0
    // Isso é importante porque a posição do array deve ser um número inteiro
    const indice = Math.floor(numeroMultiplicado);
    // console.log(indice); // Descomente para ver qual índice foi sorteado
    
    // Agora retornamos a cor na posição sorteada
    // cores[indice] = a cor do array naquela posição
    // return = envia esse valor de volta para quem chamou essa função
    console.log(cores[indice]); // Descomente para ver a cor sorteada
    return cores[indice];
}

// RESUMINDO: A função sortearCor() retorna uma cor aleatória do array
// Exemplo de uso: 
// const minhaCorSorteada = sortearCor(); // '##ef4848' ou '#4170ff' etc


// PASSO 3: Selecionar Todos os Elementos .item do HTML
// ======================================================
// document = acessa a página HTML inteira
// querySelectorAll('.item') = procura por TODOS os elementos com classe "item"
// const items = armazena essa lista em uma variável

const items = document.querySelectorAll('.item');
// Agora 'items' contém todos os .item da página, se tornou um ARRAY
// Se sua página tem 5 elementos .item, items conterá 5 elementos


// PASSO 4: Executar uma Ação para CADA .item
// ============================================
// forEach() = uma função que diz: "Para cada elemento desse array, execute isto:"
// Sintaxe: array.forEach(function(elemento) { ... })

items.forEach(item => {
    // Pegamos o array 'items' e para CADA elemento dentro dele, fazemos o seguinte:
    // 'item' = representa UM elemento .item em cada volta do loop, dentro do array 'items'
    // Primeira volta: item = primeiro .item
    // Segunda volta: item = segundo .item
    // E assim por diante...
    
    // PASSO 5: Adicionar um Ouvidor de Evento (Listener)
    // ==================================================
    // addEventListener() = "fique observando esse elemento por um evento"
    // 'mouseenter' = o evento que queremos ouvir (mouse entra no elemento)
    // function() { } = onde vamos definir o que fazer quando esse evento acontecer
    
    item.addEventListener('mouseenter', function() {
        // Este código APENAS executa quando o mouse ENTRA no elemento
        
        // PASSO 6: Sortear uma Cor
        // ========================
        // Chamamos a função sortearCor() que criamos antes
        // Essa função retorna uma cor aleatória que foi sorteada lá atrás
        // Armazenamos em uma variável chamada corSorteada
        
        const corSorteada = sortearCor();
        // Agora corSorteada = uma cor aleatória como '#ef4848'
        // console.log(corSorteada); // Descomente para ver qual cor foi sorteada
        
        
        // PASSO 7: Modificar o CSS do Elemento ::before
        // =============================================
        // this = o elemento .item que foi hoverado (o mouse entrou)
        // style.setProperty() = modifica uma variável CSS
        // '--cor-hover' = nome da variável CSS (variáveis CSS começam com --)
        // corSorteada = o novo valor da variável
        
        this.style.setProperty('--cor-hover', corSorteada);
        // No CSS, você precisa usar: color: var(--cor-hover);
        
        
        // PASSO 8: Encontrar e Modificar o Elemento <i> (Ícone)
        // ======================================================
        // querySelector('i') = procura pelo PRIMEIRO elemento <i> dentro desse .item
        // const iconElement = armazena esse elemento em uma variável
        
        const iconElement = this.querySelector('i');
        // Agora iconElement = o elemento <i> dentro desse .item
        
        
        // PASSO 9: Verificar se o Elemento Existe (Proteção)
        // ===================================================
        // if (iconElement) = verifica se encontrou o elemento
        // Se não houver <i> dentro do .item, isso evita um erro
        
        if (iconElement) {
            // Se encontrou, mude a cor do texto/ícone
            iconElement.style.color = corSorteada;
            // Agora o ícone tem a mesma cor sorteada
        }
    });
    
    // Você pode adicionar mais eventos aqui:
    // item.addEventListener('mouseleave', function() { ... }); // ao sair
    // item.addEventListener('click', function() { ... }); // ao clicar
});