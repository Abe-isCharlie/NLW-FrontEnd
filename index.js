const perguntas = [
	{
		pergunta: 'Qual é o tipo de dado que armazena texto em JavaScript?',
		respostas: ['Number', 'String', 'Boolean'],
		correta: 1,
	},
	{
		pergunta:
			'Qual palavra-chave é utilizada para definir uma função em JavaScript?',
		respostas: ['function', 'var', 'let'],
		correta: 0,
	},
	{
		pergunta:
			'Qual operador é utilizado para concatenar strings em JavaScript?',
		respostas: ['+', '*', '&'],
		correta: 0,
	},
	{
		pergunta:
			'Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?',
		respostas: ['push()', 'pop()', 'shift()'],
		correta: 0,
	},
	{
		pergunta:
			'Qual é o tipo de loop que é utilizado para executar um bloco de código enquanto uma condição for verdadeira?',
		respostas: ['for', 'while', 'do while'],
		correta: 1,
	},
	{
		pergunta:
			'Qual é o objeto que representa a janela do navegador em JavaScript?',
		respostas: ['window', 'document', 'navigator'],
		correta: 0,
	},
	{
		pergunta:
			'Qual evento é disparado quando o usuário clica em um elemento HTML?',
		respostas: ['click', 'mouseenter', 'mouseleave'],
		correta: 0,
	},
	{
		pergunta:
			'Qual é a biblioteca JavaScript mais popular para manipulação do DOM?',
		respostas: ['jQuery', 'React', 'Vue.js'],
		correta: 0,
	},
	{
		pergunta:
			'Qual framework JavaScript é utilizado para construir interfaces de usuário?',
		respostas: ['Angular', 'Bootstrap', 'Materialize'],
		correta: 0,
	},
	{
		pergunta:
			'Qual é o módulo que fornece funcionalidades de importação e exportação de módulos em JavaScript?',
		respostas: ['import', 'export', 'module'],
		correta: 2,
	},
];

const quiz = document.getElementById('quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalPerg = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalPerg;

//loop
for (const item of perguntas) {
	const quizItem = template.content.cloneNode(true);
	quizItem.querySelector('h3').textContent = item.pergunta;

	for (let resposta of item.respostas) {
		const dt = quizItem.querySelector('dl dt').cloneNode(true);
		dt.querySelector('span').textContent = resposta;
		dt.querySelector('input').setAttribute(
			'name',
			'pergunta-' + perguntas.indexOf(item)
		);
		dt.querySelector('input').value = item.respostas.indexOf(resposta);
		dt.querySelector('input').onchange = (event) => {
			const estaCerto = event.target.value == item.correta;
			if (estaCerto) {
				corretas.add(item);
			}

			mostrarTotal.textContent = corretas.size + ' de ' + totalPerg;
		};

		quizItem.querySelector('dl').appendChild(dt);
	}

	quizItem.querySelector('dl dt').remove();

	//bota a pergunta na tela
	quiz.appendChild(quizItem);
}
