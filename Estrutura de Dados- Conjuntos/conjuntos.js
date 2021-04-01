// Classe Conjuntos: funciona que adiciona chave e valor. Quer dizer que não pode repitir valor

function Conjunto(){
    let itens = {}

 this.add = function(valor){
     // Adicionar um novo item ao conjunto
     if (!this.esta(valor)) {
         itens[valor] = valor
         return true
     }
     return false
 }

 this.remover = function(valor){
    //  remove um item ao conjunto
    if (this.esta(valor)) {
        delete itens[valor] // o usando delete assim é pq estamos removendo um objeto chave e valor
        return true
    }
    return false
 }

 this.esta = function(valor){
    //  Verifica se o item existe ou não
    return itens.hasOwnProperty(valor)
 }

 this.limpar = function(){
    // remove todos itens do conjunto
    itens = {}
 }

 this.tamanho = function(){
    //  retorna o tamanho do conjunto
    return Object.keys(itens).length
 }

 this.valores = function(){
    // retorna o array com todos o itens do conjunto
    let valores = [],
    chaves = Object.keys(itens)

    for(let i = 0; i < chaves.length; i++){
        valores.push(itens[chaves[i]])
    }
    return valores
 }

 this.uniao = function(outroConjunto){
    let uniaoConjunto = new Conjunto(),
    valores = this.valores()

    for (let i = 0; i < valores.length; i++) {
        uniaoConjunto.add(valores[i])        
    }
    valores = outroConjunto.valores()

    for (let i = 0; i < valores.length; i++){
        uniaoConjunto.add(valores[i])
    }

    return uniaoConjunto

 }
}
// instanciando a classe conjuntos

let conjuntoA = new Conjunto()

conjuntoA.add(1)
conjuntoA.add(2)
conjuntoA.add(3)

let conjuntoB = new Conjunto()
conjuntoB.add(3)
conjuntoB.add(4)
conjuntoB.add(5)
conjuntoB.add(6)

let uniaoAB = conjuntoA.uniao(conjuntoB)
console.log(uniaoAB.valores())