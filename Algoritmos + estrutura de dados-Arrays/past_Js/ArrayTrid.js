let mesTempMedia = []
let primeiraSemana = [];
let ultimaSemana = [];
                         // 0  1  2  3   4  5   6
let tempDiariaSemana1 = [24,27,22,25.5,28,35,18.9];
let tempDiariaSemana2 = [26,28,24,27.5,21,24.5,20.9];
let tempDiariaSemana3 = [22,18,25,22.5,28,30,28.9];
let tempDiariaSemana4 = [5,21,23.8,20.5,21,20.5,-8];
                //posi   0                  1
primeiraSemana = [tempDiariaSemana1,tempDiariaSemana2];
ultimaSemana = [tempDiariaSemana3, tempDiariaSemana4];
               
                //      0           1
mesTempMedia = [primeiraSemana,ultimaSemana];

// Como acessar o elemento especifico? Exemplo imprimir a temperatura mais baixa de todas.
console.log(`Temperatura mais baixas dos Arrays:  ${mesTempMedia[1][1][6]}º Graus  `)

// Como iterar Um array tri-dimensional ou com mais dimensões

for(let i = 0; i < mesTempMedia.length;i++){
    for(let x = 0; x < mesTempMedia[i].length;x++){
        for(let y = 0; y < mesTempMedia[i][x].length; y++){
            console.log(`Iterando ${mesTempMedia[i][x][y]}º Graus`)
        }
    }
};
/* Explicando a sequencia de for's aninhados
1º Primeiro for, compara contador 'i' com tamanho do Array "PAI" mesTempMedia,
usando a propriedade lenght, que retorna tamanho 2. Que contém dois Arrays Filhos

2º Segundo for, compara contador 'x' com tamanho do array filho que vai ser retornado
de acordo com a posição passada pelo Array "PAi" mesTempMedia,

mesTempMedia acessa seu conteúdo na posição do contador 'i', ele acessa primeiro a posição 0
o Array "filho" primeiraSemana, aparece, a propriedade length é passada

Array "filho" primeiraSemana tbm tem tamanho 2.

3º Terceiro for, compara contador 'y' como tamanho do array FILHO do FILHO.

No ultimor for, o Array "PAI" mesTempMedia acessa os Arrays "FILHOS" "primeiraSemana" ou "ultimaSemana", usando o
contador 'i', que logo em seguida, os "Array's FILHOS(primeiraSemana/ultimaSemana)" acessam seus FILHOS utilizando o contador "x"

FILHOS Dos FILHOS
[primeiraSemana] = [tempDiariaSemana1,tempDiariaSemana2]
[ultimaSemana] = [tempDiariaSemana3,tempDiariaSemana4]

Esses Arrays filhos dos filhos são os que contém as temperaturas, 
todos esse Array's filhos dos filhos possuem tamanho 7.
*/ 
