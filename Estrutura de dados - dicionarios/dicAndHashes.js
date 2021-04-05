// introdução A classe de dicionários e Hashes

function Dicionario(){
    let itens = {} //objeti vazio

    this.add = function(chave, valor){
        // adicionar um novo item ao dicionário
        itens[chave] = valor
    }

    this.deletar = function(chave){
        // remove um item usando a valor da chave
        if (this.esta(chave)) {
            delete itens[chave]
            return true
        }
        return false
    }

    this.esta = function(chave){
        // verifica se a chave existe no dicionário e retorna um boolean
        return itens.hasOwnProperty(chave) 
    }
    
    this.pegar = function(chave){
        // retorna um item a partir da chave passada
        return this.esta(chave) ? itens[chave] : undefined // ? é operador ternario
    }

    this.limpar = function(){
        // limpa o dicionário
        itens = {}
    }

    this.tamanho = function(){
        //retorna a quantidade de elementos do dicionário
        return Object.keys(itens).length
    }

    this.chaves = function(){
        // retorna um array contendo todas as chaves do dicionário
        return Object.keys(itens)
    }

    this.valores = function(){
        //retorna um array contendo todos os elementos do dicionário
        let valores = [],
        chaves = Object.keys(itens)

        for(let i = 0; i < chaves.length; i++){
            valores.push(itens[chaves[i]])
        }
        return valores
    }

    this.pegarItens = function(){
        return itens
    }
}
 
//Instâncias

let dic = new Dicionario();

dic.add('DeadPool','deadPool@gmail,com')
dic.add('John', 'johnConstantine@gmail.com')
dic.add('Eren' , 'erenJeager@gmail.com')
dic.deletar('Eren')
// dic.limpar()
console.log(dic.pegarItens())