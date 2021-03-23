/* FILAS - Coleção ordenada de itens que segue 
o princípio FIFO(First in First Out). Igual uma seria
uma fila na vida real o primeiro a chegar sera atendido. 
*/ 
function Fila(){
    let itens =[]
    
    this.itemFila = function(elemento){
        //adiciona um novo item
        itens.push(elemento)
        
    }

    this.delItemFila = function(){
        //  remove um item 
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
// Instanciando fila
let fila = new Fila()

//Invocando métodos

fila.itemFila('Maria')
 fila.itemFila('Jose')
 fila.itemFila('Breno')
 fila.itemFila('Joana')
 fila.printFila()
 

 fila.delItemFila()
 fila.delItemFila()
 fila.delItemFila()
 console.log(fila.frenteFila())
 fila.printFila()
 fila.itemFila('Gabriele')
 fila.printFila()
 console.log(fila.tamanhoFila())
 

 
