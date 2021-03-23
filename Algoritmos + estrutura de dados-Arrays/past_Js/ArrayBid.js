// Array Bidimensionais
//Array pai
let tempMediaSem = []   //indice
let tempDiariaSemana1 = [24,27,22,25.5,28,35,18.9];
let tempDiariaSemana2 = [26,28,24,27.5,21,24.5,20.9];
// Armazenando os dois array's com as médias das temperatura no Array tempMédiaSem
             //posiç  //Array filhos
tempMediaSem    [0] = tempDiariaSemana1;
tempMediaSem    [1] = tempDiariaSemana2;

//Para acessar valores é só passar posição e indice
//Exemplo: Como acessar a temperatura mais alta diaria do Array tempDiariaSemana1
console.log(`${tempMediaSem[0][5]} Acessando Temperatura mais Alta`);

// Para iterar esse Array Bi-Dimensional basta fazar duas estruturas de repetição

for(let i = 0; i < tempMediaSem.length;i++){
    for(let j = 0; j < tempMediaSem[i].length;j++){
        console.log(`${tempMediaSem[i][j]} Iterando Array`);
    }
};

/* Contador i representa as posição no Array tempMediaSem, 
que tem tamanho 2, e cada posição contém um outro array armazenado nele.
contador 'i' começa e 0, que acessa tempMediaSem na posição do contador, que recebeu
o Array tempDiariaSemana1.
*/ 

// Contador j representa os indices que vão ser acessar o Array tempMediaSem[posição 'i' que é igual a 0 ou 1] 

