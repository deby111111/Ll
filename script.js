const perguntas = [
  {
    texto: "1. \nA inteligência artificial está cada vez mais presente em nossas vidas. Qual deve ser o cuidado ao usá-la?",
    opcoes: [
      { texto: "Usar com responsabilidade e respeitar os empregos das pessoas.", valor: "a" },
      { texto: "Aproveitar ao máximo para aumentar a eficiência, mesmo que substitua algumas funções.", valor: "b" },
      { texto: "Permitir que a inteligência artificial faça todas as tarefas.", valor: "c" }
    ]
  },
  {
    texto: "2.\nOs recursos hídricos estão diminuindo rapidamente. Como agir diante disso?",
    opcoes: [
      { texto: "Implementar campanhas para o uso consciente e proteção da água.", valor: "a" },
      { texto: "Priorizar o uso para atividades econômicas importantes.", valor: "b" },
      { texto: "Não se preocupar, pois a situação pode ser resolvida depois.", valor: "c" }
    ]
  },
  {
    texto: "3. \nA disseminação de informações falsas tem aumentado. O que fazer para minimizar esse problema?",
    opcoes: [
      { texto: "Investir em educação para identificar notícias falsas.", valor: "a" },
      { texto: "Deixar que cada pessoa decida no que acredita.", valor: "b" },
      { texto: "Utilizar as informações falsas para benefício próprio.", valor: "c" }
    ]
  },
  {
    texto: "4. \nO mercado de trabalho está em transformação constante. Como deve ser a abordagem?",
    opcoes: [
      { texto: "Promover empregos com condições justas e oportunidades para todos.", valor: "a" },
      { texto: "Focar na produtividade, mesmo que isso prejudique direitos trabalhistas.", valor: "b" },
      { texto: "Automatizar o máximo possível e reduzir o número de trabalhadores.", valor: "c" }
    ]
  },
  {
    texto: "5. \nMuitas espécies e áreas naturais estão desaparecendo. Qual é a melhor atitude?",
    opcoes: [
      { texto: "Proteger os ecossistemas e preservar as espécies.", valor: "a" },
      { texto: "Equilibrar a proteção ambiental com o desenvolvimento econômico.", valor: "b" },
      { texto: "Priorizar o crescimento econômico, mesmo que prejudique a natureza.", valor: "c" }
    ]
  },
  {
    texto: "6.\nO consumo de alimentos industrializados está crescendo. O que deve ser feito?",
    opcoes: [
      { texto: "Incentivar o acesso à alimentação saudável, especialmente nas escolas.", valor: "a" },
      { texto: "Garantir a oferta de alimentos básicos, sem focar na qualidade.", valor: "b" },
      { texto: "Priorizar alimentos baratos e rápidos, mesmo que não sejam saudáveis.", valor: "c" }
    ]
  },
  {
    texto: "7. \nAs empresas coletam muitos dados pessoais. Qual é a melhor postura?",
    opcoes: [
      { texto: "Garantir a proteção dos dados e a transparência no uso.", valor: "a" },
      { texto: "Aceitar a coleta como parte da vida digital moderna.", valor: "b" },
      { texto: "Utilizar os dados para fins comerciais sem restrições.", valor: "c" }
    ]
  },
  {
    texto: "8.\nO trânsito e o transporte público apresentam muitos problemas. O que fazer?",
    opcoes: [
      { texto: "Melhorar o transporte coletivo e incentivar meios alternativos.", valor: "a" },
      { texto: "Investir em infraestrutura para veículos particulares.", valor: "b" },
      { texto: "Manter a situação atual e deixar que as pessoas se adaptem.", valor: "c" }
    ]
  },
  {
    texto: "9. \nMuitos jovens estão desmotivados em relação ao futuro. Como ajudar?",
    opcoes: [
      { texto: "Oferecer oportunidades educacionais e apoio psicológico.", valor: "a" },
      { texto: "Considerar isso uma fase normal da juventude.", valor: "b" },
      { texto: "Deixar que cada um encontre seu próprio caminho.", valor: "c" }
    ]
  },
  {
    texto: "10.\nOs povos indígenas enfrentam ameaças aos seus territórios e cultura. O que fazer?",
    opcoes: [
      { texto: "Respeitar seus direitos e proteger suas terras.", valor: "a" },
      { texto: "Oferecer algum apoio, mas limitar o espaço reservado.", valor: "b" },
      { texto: "Priorizar o desenvolvimento econômico em detrimento desses direitos.", valor: "c" }
    ]
  }
];

const resultados = {
  a: {
    titulo: "🌿 Mundo de Boas",
    texto: "Você mandou bem! O mundo está mais justo, equilibrado e com respeito ao meio ambiente e às pessoas."
  },
  b: {
    titulo: "🤖 Mundo dos Robôs",
    texto: "O mundo avançou rápido, mas deixou de lado direitos importantes e o cuidado com as pessoas."
  },
  c: {
    titulo: "💥 Caos Total",
    texto: "As escolhas levaram a um cenário de desigualdade, falta de respeito e destruição ambiental."
  }
};

let respostas = [];
let perguntaAtual = 0;

const divPerguntas = document.getElementById("perguntas");
const btnProximo = document.getElementById("btnProximo");
const divResultado = document.getElementById("resultado");
const tituloResultado = document.getElementById("tituloResultado");
const textoResultado = document.getElementById("textoResultado");
const btnReiniciar = document.getElementById("btnReiniciar");

function mostrarPergunta() {
  const p = perguntas[perguntaAtual];
  divPerguntas.innerHTML = `<h2>${p.texto}</h2>` +
    p.opcoes.map((op, i) => `
      <div class="opcao">
        <input type="radio" name="pergunta" id="op${i}" value="${op.valor}">
        <label for="op${i}">${op.texto}</label>
      </div>
    `).join("");
}

btnProximo.addEventListener("click", () => {
  const selecionada = document.querySelector('input[name="pergunta"]:checked');
  if (!selecionada) {
    alert("Escolha uma opção!");
    return;
  }
  respostas.push(selecionada.value);
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

btnReiniciar.addEventListener("click", () => {
  respostas = [];
  perguntaAtual = 0;
  divResultado.classList.add("hidden");
  btnProximo.classList.remove("hidden");
  mostrarPergunta();
});

function mostrarResultado() {
  const contagem = { a: 0, b: 0, c: 0 };
  respostas.forEach(r => contagem[r]++);
  const final = Object.entries(contagem).sort((a, b) => b[1] - a[1])[0][0];
  tituloResultado.textContent = resultados[final].titulo;
  textoResultado.textContent = resultados[final].texto;
  divPerguntas.innerHTML = "";
  btnProximo.classList.add("hidden");
  divResultado.classList.remove("hidden");
}

mostrarPergunta();
