
function DuplamListaLigada(){
    let NoConstrutor = function(elemento){
        this.elemento = elemento
        this.proximo = null
        this.antes = null
    }

    let tamanho = 0 
    let cabeca = null
    let cauda = null 

    this.acrescentar = function(elemento){ 
        let no = new NoConstrutor(elemento),  
        atual                                          
        
        if(cabeca == null){
            cabeca = no
            cauda = no
        }else{
            atual = cabeca
            while(atual.proximo){
                atual = atual.proximo
            }
            atual.proximo = no
            cauda = no
        }
        tamanho++
    }

    this.enserirPosicao = function(posicao, elemento){
    if(posicao >= 0 && posicao <= tamanho){
        let no = new NoConstrutor(elemento),
        atual = cabeca,
        anterior,
        index= 0

        if (posicao ===0) {
            if (!cabeca) {
                cabeca = no
                cauda = no
            }else{
                no.proximo = atual
                atual.antes = no
                cabeca = no
            }
        }else if (posicao === tamanho) {
            atual = cauda
            atual.proximo = no
            no.antes = atual
            cauda = no
        }else{
            while(index++ < posicao) {
                antes = atual
                atual = atual.proximo
            }
            no.proximo = atual
            antes.proximo = no
            atual.antes = no
            no.antes = anterior
        }
        tamanho++
        return true
    }else{
        return false
    }
}

    this.removerPosicao = function(posicao){
    
    
}
    
    this.removerElemento = function(elemento){
    let index = this.indexOf(elemento)
    return this.removerPosicao(index)
    }

    this.indexOf = function(elemento){
        let atual = cabeca, 
        index = 0

        while (atual) { 
            if(elemento === atual.elemento){
                return index 
            }
            index++ 
            atual = atual.proximo 
        }
        return -1
    }
    this.estaVazio = function(){
        return tamanho == 0
    }

    this.tamanho = function(){
        return tamanho
    }
    this.buscarCabeca = function(){
        return cabeca
    }
    this.toString = function(){
        let atual = cabeca
        let string = ''

        while(atual){
            string += atual.elemento + ' '
            atual = atual.proximo
        }
        return string
    }

    this.print = function(){
    console.log(this.toString())
    }
}

let listaDuplalig = new DuplamListaLigada()

listaDuplalig.acrescentar('Chico')
listaDuplalig.acrescentar('LionMan')
listaDuplalig.acrescentar('Eren')
listaDuplalig.enserirPosicao(2,'lucas')
listaDuplalig.enserirPosicao(1,'thomas')
listaDuplalig.print()

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