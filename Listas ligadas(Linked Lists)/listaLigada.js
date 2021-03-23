/* São coleções sequenciais de elementos, mas diferente
de array não possuem aquelas posições que começam em 0123.
Cada elemento é constituido de um nó, que armazena tanto o valor
como a referência ao próximo elemento(ponteiro)
*/ 
function ListaLigada(){
    let NoConstrutor = function(elemento){
        this.elemento = elemento
        this.proximo = null
    }

    let tamanho = 0 // 1
    let cabeca = null // não mais null recebe no: Joao,Maria

    this.acrescentarFinal = function(elemento){ //joao
        //Adicona um elemento ao final da lista
        let no = new NoConstrutor(elemento),// Joao, null   
        atual //undfined                   // Lucas, null
                                          //  Maria, null  
        if(cabeca == null){
            cabeca = no 
        }else{
            atual = cabeca

            while(atual.proximo){
                atual = atual.proximo
            }
            atual.proximo = no
        }
        
        tamanho++
    }
                                    // 0,   'Luciano'
                                    // 2,   'Ana'
    this.enserirPosicao = function(posicao, elemento){
    //Adicona um elemento em uma posição especifíca da lista
    if(posicao >= 0 && posicao <= tamanho){ //range: 0 a 3 
                                            //+ um elemento 0 a 4 
        let no = new NoConstrutor(elemento),// new no: 0, luciano em no
                                           // new no: 2, Ana em no
        atual = cabeca,//no1(joao)/ no0(luciano)
        anterior, // undfined
        index = 0
        //  0 - 2
        if(posicao === 0 ){ // true / false 
            no.proximo = atual // instancia.proximo recebe no1(joao)
            cabeca = no // cabeca recebe no0(luciano) na posicão 0
        }else{
            //     0-1-2       2
            while(index++ < posicao){ // true / true / false
                anterior = atual //1º var anterior recebe no0(luciano)
                                //2º var anterior recebe no1(joao)
                
                atual = atual.proximo // atual recebe no2(maria)
                //repete o laço
            }
            no.proximo = atual  // new no.proximo recebe no2(maria)
            anterior.proximo = no // no1(joao).proximo recebe new no(Ana)
        }
        tamanho ++
        return true
    }else{
        return false
    }
}
/* no1 = joao
   no2 = lucas
   no3 = maria
*/ 
    this.removerPosicao = function(posicao){// 0 
    // Remove um elemento em uma posição especifíca da lista
    if(posicao > -1 && posicao < tamanho){ // 0 true
        let atual = cabeca, //no1
        anterior, //undfined
        index = 0
        //  0 1
        if(posicao === 0){// true / false
            cabeca = atual.proximo // no1 recebe no2
            //no1 = joao deixa de existir
        }else{
            while(index++ < posicao){// 0 < 1 true
                anterior = atual //no1
                atual = atual.proximo // no1 recebe no2
            }
            anterior.proximo = atual.proximo
        }
        tamanho -- // decremento saiu no1(joao)

        return atual.elemento // retorna o elemento eliminado
    }else{
        return null
    }
}
    
    this.removerElemento = function(elemento){
    // Remover o elemento passado como parametro
    let index = this.indexOf(elemento)
    return this.removerPosicao(index)
    }

    this.indexOf = function(elemento){//Ana
    // Retorna a posição do elemento
    // Esse método reseta todas a variaveis menos cabeca
        let atual = cabeca, // no0(luciano)
        index = 0

        while (atual) { // true pq é diferente de null 
            if(elemento === atual.elemento){
            //1º paramet(Ana) é igual no0(luciano)? false
            //2º param(Ana) é igual no1(joão)? false
            //3º param(Ana) é igual no2(Ana)? true
                return index // 2
            }
            index++ // 1 2
            atual = atual.proximo 
            //1º atual recebe no1(joão)
            //2º atual recebe no2(Ana)

            //repete laço
        }
        return -1
    }
    this.estaVazio = function(){
    // Retorna se está vazio ou não a instância
        return tamanho == 0
    }

    this.tamanho = function(){
    // Retorna o tamanho da lista
        return tamanho
    }
    this.buscarCabeca = function(){
        return cabeca
    }
    this.toString = function(){
        // Converte em string
        let atual = cabeca
        let string = ''

        while(atual){
            string += atual.elemento + ' '
            atual = atual.proximo
        }
        return string
    }

    this.print = function(){
    // Imprime no console
    console.log(this.toString())
    }
}

let listaLig = new ListaLigada()
listaLig.acrescentarFinal('João')
listaLig.acrescentarFinal('Lucas')
listaLig.acrescentarFinal('Maria')
listaLig.print()
console.log(`Elemento eliminado foi ${listaLig.removerPosicao(1)}`)
listaLig.print()
listaLig.enserirPosicao(0,'Luciano')
listaLig.enserirPosicao(2,'Ana')
listaLig.print()
console.log(listaLig.indexOf('Ana'))
console.log(listaLig.indexOf('João'))
listaLig.print()
console.log(listaLig.removerElemento('João'))
listaLig.print()
console.log(listaLig.estaVazio())
console.log(listaLig.tamanho())
console.log(listaLig.buscarCabeca())
/* Debug

Método acrescentarFinal
1. Recebe o argumento na função, função copia esse valor para dentro do parametro elemento
joao é copiado
2 a 'variavel no' recebe uma nova instancia do construtor NoConstrutor, com o parametro joao
o construtor tbm copia o valor joao para seu proprio parametro elemento.

3 construtor No possui dois propriedades this.elemento que recebe joao
e this.proximo que tem null

4 a 'var no' recebe a instancia de NoConstrutor com valores joao, null

5 'If condição' verifica a var cabeça é igual a null? sim
entao var cabeça recebe a var no
cabeca = joao, null

6 Agora var cabeça não é mais null,cabeça agora é uma instancia de NoConstrutor
tem 'joao e null' armazenado

7 Passa direto pelo laço while pq esta dentro da condição else

10 Mais uma vez o método acrescentarFinal é chamado com argumento lucas
a função acrescentarFinal recebe o argumento, função copia esse valor para dentro do parametro elemento
lucas é copiado.

11 a 'variavel no' recebe uma nova instancia do construtor NoConstrutor, com o parametro Lucas
o NoConstrutor tbm copia o valor Lucas para seu proprio parametro elemento.
construtor NoConstrutor possui duas propriedades this.elemento que recebe Lucas
e this.proximo que tem null.

12 a 'var no' recebe a instancia de NoConstrutor com valores Lucas null

13 'If condição' verifica a var cabeça é igual a null? Não
cabeça recebeu joao, null então vai para o else

14 a var atual que era undfined agora recebe cabeca
atual recebe joao, null

15 dentro de else tem o laço while que verifica atual(joao,null).proximo é verdadeiro?
não proximo é null, então sai o laço

16 atual.proximo recebe o valor contido na nova instancia passada para a var no: lucas, null
elemento = joao
                --> Joao.Lucas ou seja a propriedade próximo de João recebeu lucas
proximo = lucas 

17 tamanho aumenta em 1

18 Na proximas chamadas do metodo acrescentarFinal com argumento o processo


19 Mais uma vez o método acrescentarFinal é chamado com argumento lucas
a função acrescentarFinal recebe o argumento, função copia esse valor para dentro do parametro elemento
Maria é copiado. 

20 Os processo se repetem a variavel cabeça não se altera de valor por esta fora do escopo da função
a var atual reinicia undefined

21 Na condição if var cabeca não é igual a null é false, entao passa para else

22 atual que reiniciou em undfined agora recebe cabeca
atual = joao,lucas

23 indo para laço while verifica atual.proximo(joao,Lucas) é verdadeiro
sim            var atual
        this.elemento = joao
        this.proximo = Lucas

24 Atual joao,lucas recebe uma chamada da propriedade proximo do NoConstrutor
     var atual
        this.elemento = joao
        this.proximo = Lucas  + this.proximo = null = lucas,null

25 var atual tem joao,lucas,null o laço while repete e verifica atual.proximo é verdadeiro?
não pq this.proximo recebeu um null então sai do laço while

26 então a var atual joao,lucas,null  recebe na propriedade this.proximo  que tem null 
a instancia de no que é Maria

joao,lucas,null -> Joao, Lucas, Maria

27 var tamanho aumenta mais um


*/ 