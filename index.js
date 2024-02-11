const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um sistema operacional",
      "Um navegador da web",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do 'console.log()' em JavaScript?",
    respostas: [
      "Imprimir uma mensagem no console",
      "Alterar o estilo de uma página da web",
      "Executar uma função assíncrona",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
    respostas: [
      "//",
      "/*",
      "#",
    ],
    correta: 0,
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "var",
      "let",
      "const",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita de igualdade",
      "Atribuição",
      "Concatenação de strings",
    ],
    correta: 0,
  },
  {
    pergunta: "O que significa 'NaN' em JavaScript?",
    respostas: [
      "Não é um número (Not a Number)",
      "Número Aleatório Negativo",
      "Nova Abstração de Números",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o resultado de 10 + '10' em JavaScript?",
    respostas: [
      "1010",
      "20",
      "Erro",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
    respostas: [
      "Selecionar elementos do DOM por um seletor CSS",
      "Executar uma animação CSS",
      "Criar um novo elemento no DOM",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
    respostas: [
      "Anexar um manipulador de eventos a um elemento HTML",
      "Definir estilos para um elemento HTML",
      "Remover um elemento do DOM",
    ],
    correta: 0,
  },
  {
    pergunta: "Como se chama o conceito em JavaScript de colocar uma função dentro de outra função?",
    respostas: [
      "Aninhamento de função",
      "Recursão",
      "Escopo de função",
    ],
    correta: 0,
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()


  //loop que coloca as perguntas
  quiz.appendChild(quizItem)
}