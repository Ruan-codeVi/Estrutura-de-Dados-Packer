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
    // retorna o array com todos os elementos do conjunto
    let valores = [],
    chaves = Object.keys(itens)

    for(let i = 0; i < chaves.length; i++){
        valores.push(itens[chaves[i]])
    }
    return valores
 }

 this.uniao = function(outroConjunto){
     // uni os elementos passados nas estâncias em unico array
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

 this.intersecao = function(outroConjunto){
    //  Verifica se há elementos iguais em ambas as instâncias, ou seja no dois conjuntos
     let intersecaoConju = new Conjunto(),
     valores = this.valores()

     for(let i = 0; i < valores.length; i++){
         if (outroConjunto.esta(valores[i])) {
             intersecaoConju.add(valores[i])
         }
     }
     return intersecaoConju

 }

 this.diferente = function(outroConjunto){
    /* Verifica os elementos das instancias que se comparam utilizando seus tamanhos 
    e vêem quais não se repetem, ou diferentes entre si */      
    let diferentConj = new Conjunto()
    valores = this.valores()//[123]
    
    for(let i = 0; i < valores.length; i++){
        if (!outroConjunto.esta(this.valores[i])) {
            diferentConj.add(this.valores[i])
        }
    }
    return diferentConj
 }

 this.subConj = function(outroConjunto){
     if(this.tamanho() > outroConjunto.tamanho()){
         return false
     }else{
         let valores = this.valores()

         for(let i = 0; i < valores.length; i++){
             if(!outroConjunto.esta(valores[i])){
                 return false
             }
         }
         return true
     }
     
   }
}
// instanciando a classe conjuntos

let conjuntoA = new Conjunto()

conjuntoA.add(1)
conjuntoA.add(2)


let conjuntoB = new Conjunto()
conjuntoB.add(1)
conjuntoB.add(2)
conjuntoB.add(3)

let conjuntoC = new Conjunto()
conjuntoC.add(2)
conjuntoC.add(3)
conjuntoC.add(4)

console.log(conjuntoA.subConj(conjuntoB))
console.log(conjuntoA.subConj(conjuntoC))