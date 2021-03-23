// Classe Fila com  prioridade

function FilaPrioridade(){
    let itens = []
// itens[{'lucas', 1}, {'Maria',1}, {'Carlos',2}]
    
function FilaElementosClass(elemento, prioridade){
        this.elemento = elemento // carlos, lucas, maria
        this.prioridade = prioridade // 2, 1, 1
    }
    //método adicionar item
    this.naFila = function(elemento, prioridade){  //carlos,    2
                                                   //lucas,     1
                                                   //Maria,     1
        let filaElementos = new FilaElementosClass(elemento, prioridade)
        let add = false
       // console.log(filaElementos)
        for(let i = 0; i < itens.length; i++){
            if(filaElementos.prioridade < itens[i].prioridade){
                itens.splice(i, 0, filaElementos)
                add = true
                break
            }
        }
        if(!add){
            itens.push(filaElementos)
        }
    }
    this.delItemFila = function(){
        return itens.shift()
    } 
    this.print = function(){
        for(let i = 0; i < itens.length; i++){
            console.log(` ${itens[i].elemento} ${itens[i].prioridade} Prioridade`)
        }
    }
}
// Instanciando
let prioridFila = new FilaPrioridade()

prioridFila.naFila('Calos', 2)
prioridFila.naFila('Lucas',1)
prioridFila.naFila('Maria',1)
prioridFila.print()

/* Debug

1 - Quando invocamos a função prioridFila ponto o método naFila passando os dois argumentos,
 a variavel filaElementos recebe uma nova estância a cada vez que argumentos são passados, com os valores copiados para a a class
new FilaElementosClass(carlos, 2) ou seja o objeto carlos,2 é criado dentro de FilaElementos.

1.1 - filaElementos agora tem objeto (carlos, 2) armazenado
a variavel add recebe false.

1.2 - Entra no laço for e verifica se contador i é menor que tamanho de itens, que ta iniciando vazio
então a condição no for da false, ele vai direto pro if.

1.3 - No if  verifica se add é diferente de true ou seja se add é false, como é assa condição
é verdadeira, então intens puxa o conteúdo de filaElementos (carlo, 2), agora itens[carlos, 2]

2 - Na segunda chamada da função prioridFila ponto o método naFila passando de novo os dois argumentos,
a variavel filaElementos recebe uma nova estância a cada vez que argumentos são passados, com os valores copiados para a a class
new FilaElementosClass(Lucas,1) ou seja o objeto lucas,1 é criado dentro de FilaElementos.

2.1 - filaElementos agora tem objeto (lucas, 1) armazenado

2.2 - Entra no laço for e verifica se contador i=0 é menor que tamanho de itens, que ta iniciando em tamanho 1
i= 0 < 1 = tamanho de array itens. Então a condição no for é true, ele executa o for
                lucas                   Carlos
2.3 - if se filaElementos.prioridade < itens[i].prioridade
                              1    <   2
                               if(1<2)
a condição no if é true, então executa o bloco do if

2.4 - itens.splice dentro paranteses contador i posi 0, 
0 não sobreescrer e vai empurrar o que tiver pra frente,
guarda o valor armazenado em (filaElementos: lucas, 1)
        antes                        depois
itens[{'Carlos',2}]         itens[{'Lucas',1},{'Carlos',2}]

2.5 - var add recebe true

2.6 - break, ele sai do laço

2.7 vai pro if e verifica Se negação de add e mesma coisa que ver se add é igual a false
como add é true agora o if da resposta false 

O processo se repete a cada vez que invocarmos a função prioridFila.naFila e passamos
os dois argumentos: Elemento, prioridade para a função
*/ 