// Criar uma funcao que dado um valor X, crie um array de numeros aleatórios com tamanho X.

//Função para gerar um númeor aleatório e inteiro entre valor min e máx
function random(quantidade) {
	function intaleatorio(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	let sequencia = []
	//Gerar os números da sequência
	for (let j = 0; j < quantidade; j++) {
		let numero = intaleatorio(20, 2000000);

		sequencia.push(numero);
	}
	return sequencia;
}




module.exports = random;
