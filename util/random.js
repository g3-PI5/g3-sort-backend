// Criar uma funcao que dado um valor X, crie um array de numeros aleatórios com tamanho X.
//Função para gerar um númeor aleatório e inteiro entre valor min e máx
function intaleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Array que armazena as sequências
let sequencia = [];

//Gerar 5 sequências e quantidade de números dentro delas
for (let i = 0; i < 5; i++) {
  let quantidade = intaleatorio(10000, 1000000);
  
  //Array que armazena a sequência 
  let sequencia = [];
  
  //Gerar os números da sequência
  for (let j = 0; j < quantidade; j++) {
    let numero = intaleatorio(20, 2000000);
    
    sequencia.push(numero);
  }
  
  sequencia.push(sequencia);
}
  
console.log.sequencia