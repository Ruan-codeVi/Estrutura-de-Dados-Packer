
function DuplamListaLigada(){
    let NoConstrutor = function(elemento){
        this.elemento = elemento
        this.antesProp = null
        this.proximoProp = null
        
    }

    let tamanho = 0 
    let cabeca = null //cabeça sempre será o primeiro elemento do array
    let cauda = null  //cauda smpre será o ultimo elemento do array 

    this.acrescentar = function(elemento){ 
        let no = new NoConstrutor(elemento),  
        atual                                          
        
        if(cabeca == null){
            cabeca = no
            cauda = no
        }else{
            atual = cabeca
            while(atual.proximoProp){
                atual = atual.proximoProp
            }
            atual.proximoProp = no
            cauda = no
        }
        tamanho++
    }

    this.enserirPosicao = function(posicao, elemento){
    if(posicao >= 0 && posicao <= tamanho){
        let no = new NoConstrutor(elemento),
        atual = cabeca,
        anteriorVar,// undfined
        index= 0

        if (posicao ===0) {
            if (!cabeca) {
                cabeca = no
                cauda = no
            }else{
                no.proximoProp = atual
                atual.antesProp = no
                cabeca = no
            }
        }else if (posicao === tamanho) {
            atual = cauda
            atual.proximoProp = no
            no.antesProp = atual
            cauda = no
        }else{
            while(index++ < posicao) {
               anteriorVar = atual
                atual = atual.proximoProp
            }
            no.proximoProp = atual
            anteriorVar.proximoProp = no
            atual.antesProp = no
            no.antesProp = anteriorVar
            
        }
        tamanho++
        return true
    }else{
        return false
    }
}

    this.removerPosicao = function(posicao){
    if (posicao > -1 && posicao < tamanho) {
        let atual = cabeca,
        anteriorVar,
        index= 0

        if (posicao === 0) {
            cabeca = atual.proximoProp

            if (posicao === 1) {
                cauda = null
            }else{
                cabeca.antesProp = null
            }
        } else if (posicao === tamanho -1) {
            atual = cauda
            cauda = atual.antesProp
            cauda.proximoProp = null
        } else {
            while (index++ < posicao) {
                anteriorVar = atual
                atual = atual.proximoProp
            }
            anteriorVar.proximoProp = atual.proximoProp
            atual.proximoProp.antesProp = anteriorVar
        }
        tamanho --
        return atual.elemento
    } else{
        return null
    }
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
            atual = atual.proximoProp 
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
            atual = atual.proximoProp
        }
        return string
    }

    this.print = function(){
    console.log(this.toString())
    }
}

let listaDuplalig = new DuplamListaLigada()

listaDuplalig.acrescentar('João')
listaDuplalig.acrescentar('Lucas')
listaDuplalig.acrescentar('maria')
listaDuplalig.print()
listaDuplalig.enserirPosicao(0,'James')
listaDuplalig.enserirPosicao(4,'Eren')
listaDuplalig.enserirPosicao(2,'Mikasa')
listaDuplalig.print();
listaDuplalig.removerPosicao(0)

listaDuplalig.print();

listaDuplalig.removerPosicao(2)
listaDuplalig.removerPosicao(1)
listaDuplalig.print();