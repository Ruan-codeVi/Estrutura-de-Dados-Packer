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

let conjuto = new Conjunto();

conjuto.add(1)
conjuto.add(2)
conjuto.add(3)
conjuto.add(4)
conjuto.add(5)
conjuto.remover(4)

console.log(conjuto.tamanho())
console.log(conjuto.valores())
console.log(conjuto.esta(3))

conjuto.limpar();
console.log(conjuto.valores())
console.log(conjuto.tamanho())

conjuto.add('maria')
conjuto.add('jose')
conjuto.add('lucas')
conjuto.add('luana')
console.log(conjuto.valores())
console.log(conjuto.tamanho())