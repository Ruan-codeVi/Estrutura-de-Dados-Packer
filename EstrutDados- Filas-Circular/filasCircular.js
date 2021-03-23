/* FILA Circular
*/ 
function Fila(){
    let itens =[]
    
    this.addItemFila = function(elemento){
        //adiciona um novo item
        itens.push(elemento)
    }

    this.delItemFila = function(){
        //  remove um item e retorna itens
       return itens.shift()
    }

    this.frenteFila = function(){
        //retorna o primeiro item da fila
        return itens[0]
    
    }

    this.estVaizoFila= function(){
        //verifica sem está vazia
        return itens.length === 0
    }

    this.tamanhoFila = function(){
        // retorna tamanho
        return itens.length
    }

    this.printFila = function(){
        //imprimi fila
       return  console.log(itens.toString())
    }
}

function jogoBatataQuente(listaNome, num){ 
    let fila = new Fila() 
    for(let i = 0; i < listaNome.length; i++){ 
        fila.addItemFila(listaNome[i]) 
        /* fila chama o método addItemFila que puxa elemento,
        um de cada vez no array que tem os nomes utilizando contador i
        */
            fila.printFila()
        //fila['joao', 'josé', 'Maria']
    }

    let eliminado = ''
    while(fila.tamanhoFila() > 1){
        for(let i = 0; i < num; i++){
            fila.addItemFila(fila.delItemFila())
        }   
        eliminado = fila.delItemFila()
        console.log(`${eliminado} está eliminado(a) do jogo da batata quente`)
    }
    
    return fila.delItemFila()
}
let nomes = ['Lucas','José','Maria']

let ganhador = jogoBatataQuente(nomes, 5)
//console.log(fila.tamanhoFila())
console.log(`Vencedor(a) ${ganhador}`)

/* Debug
1º - Na função jogoBatataQuente passamos dois argumentos nome, num
['Lucas','José','Maria'], 5

1.2 - Esses argumentos são copiados para os paramêtros da função jogoBatataQuente

1.3 - Variavel fila rebece uma instãncia de Fila

1.4 - laço while a condição é: fila ponto o método tamanhoFila que vai compara o tamanho
do array que está armazenado em fila ['Lucas','José','Maria'] entao compara se 3 é maior que 1
array tamanho 3 > 1, essa comparação é feita com 1 sendo setada
 para que o laço pare quando o array tenha só 1 item restante por causa fila.delItemFila()

sendo true o bloco do while é executado

1.5 No segundo laço for, contador i incia em 0 e compara se i menor que num
(i)0 < 5 (num) sendo true ele executa o bloco do for

1.6 No bloco for fila.addItemFila(fila.delItemFila())
retira o primeiro item do array armazenado em fila atravez do método de delItemFila()
e seguida retorna esse item na ultima posição do array atravez do método addItemFila()
    antes                                               Depois
['Lucas','José','Maria'] -> ['José','Maria'] -> ['José','Maria','Lucas']

For repete e vai incrementado o contador i até a codiçao seja false ou seja, i maior que num
a cada repetição contador i aumenta em um e o array faz troca de posições, primeiro sai e vira o ultimo

1.7 Quando laço for termina o primeiro elemento que estiver no array é removido do array atravez 
do método delItemFila() que foi chamado em fila, esse eletemento removido é
armazenado na variavel eliminado logo após console.log mostra eliminado
var eliminado = maria

1.8 Como um elemento foi removido do array contido em fila, o array que tinha tamanho 3 agora
passa a ter tamanho 2 
['Lucas','José']

1.9 Então repete e volta para o primeiro laço while que verifica de novo a condição agora com o array
tamanho 2 se é maior que 1, true e executa o bloco

2 Cai no laço for que está dentro while, for executa de novo o processo anterior descrito de for 

2.1 Quando apenas restar um elemento no array nomes, os laços param 
e esse elemento é retornando para dentro da função que vai ser armazenada
na variavel ganhador




*/ 







