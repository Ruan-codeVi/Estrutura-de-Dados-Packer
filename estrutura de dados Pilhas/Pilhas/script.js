/* Conceito de Pilha: São coleçõess ordenadas de itens
 e seguem o principio de LIFO(Last in First Out),
 o ultimo elemente adicionado a pilha, sempre é o primeiro a sair. 

 Para ilustrar Pense em uma pilha de livros, onde o último colocado
 é o primeiro da pilha
 */ 

// Estrutura da classe de pilha criada agora.

// Implementação da Classa Pilha

function stack(){
    let itens = []

    this.adicionar = function(elemento){
        //Adiciona um novo item na pilha
        itens.push(elemento)

    }

    this.remover= function(){
        //remove item do topo da pilha
        return itens.pop()
    }

    this.devolver = function(){
        //devolve item que está no topo da pilha
        return itens[itens.length -1]
    }

    this.estaVazio = function(){
        //vai informa se a pilha está vazia ou nao
        return itens.length === 0
    }

    this.limpar = function(){
        // Limpa a pilha
        itens = []
    }

    this.tamanho = function(){
        // Informa o tamanho da pilha
        return itens.length
    }

    this.print = function(){
        // Imprime a pilha no console
        console.log(itens.toString())
    }
};
// Instanciando = criando um objeto
let pilha = new stack();

//Testando os Métodos da Classe pilha
pilha.adicionar(5);
pilha.adicionar(2);
pilha.adicionar(1993);
pilha.adicionar('Fevereiro');

pilha.remover();
pilha.remover();

pilha.adicionar(5);
pilha.adicionar(2);
pilha.adicionar(1993);
pilha.adicionar('Fevereiro');
// //pilha.limpar();
console.log(pilha.estaVazio())
pilha.print()