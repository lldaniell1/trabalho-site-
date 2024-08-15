const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial influência positivamente em sua rotina ?",
        alternativas: [
            {
                texto: "Sim, concerteza !",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            },
            {
                texto: "Defenitivamente não !",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            }
        ]
    },
    { 
        enunciado: " Você acredita na automatização da IA ?",
        alternativas: [
            {
                texto: "Sim, pois existem varios sites que a gestão é realizada por IA, pois a automatização das inteligências artificias é essencial para a evolução da tecnológica  .",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            },
            {
                texto: "Não, porque ela é extremamente prejudicial a evolução humana, pois a independência dela pode gerar uma conciência coletiva negativa para a humanidade.",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            }
        ]
    },
    {
        enunciado: "Você acredita em uma nova onda digital revolucionada pela inteligência artificial, a favor da sociedade como um todo ?",
        alternativas: [
            {
                texto: "Sim, pois a nova onda chegará em breve trazendo diversas oportunidades e ramos de networking,  e trazendo diversas atualizações para todas as áreas do trabalho, assim revolucionando tecnologias futuras.",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            },
            {
                texto: "Não, é apenas uma ferramenta temporararia usada para o auxílio de trabalhos sem um espaço garantido no futuro, e com risco de ser substituida por uma nova tecnologia revolucionária.",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            }
        ]
    },
    {
        enunciado: "Você acredita que a progressão artística pode ser influenciada negativamente sendo prejudicada com o avanço da IA ?",
        alternativas: [
            {
                texto: "Sim, pois a valorização de um artista e até de um desevolvedor pode ser muito prejudicada devido a facilidade da IA de criar projetos do zero em um curto período de tempo.",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            },
            {
                texto: "Não, pois pode gerar um  espaço enorme na criação de projetos de diversas grandes empresas como produtoras de jogos, artístas independentes e influenciadores digitais.",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            }
        ]
    },
    {
        enunciado: "Em um futuro destante você imagina poder ter relações sociais com uma forma de robô humanoide integrado com sentimetos simulados e interações com a mesma capacidade de um ser humano ? ",
        alternativas: [
            {
                texto: "Sim, pois com o avanço da tecnologia/IA, poderão desenvolver sentimentos com passar do tempo covivendo com seres humanos, estudando seu forma de viver e assim aprendendo com o passar do tempo.",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade."
            },
            {
                texto: "Não, pois na minha concepção os robôs nunca chegarão nem perto de sentir algo semelhente aos sentimetos de um ser humano, pois a complexidade dos sentimos não podem se replicar em qualquer outra forma de existência além do ser humano.",
                afirmacao: "As inteligências artificiais têm causado uma revolução global ao reconfigurar profundamente quase todos os aspectos da vida moderna. Desde a automação de processos industriais e a personalização de serviços até a inovação em pesquisa científica e a transformação das interações sociais, a IA tem acelerado o progresso humano a um ritmo sem precedentes, permitindo descobertas e soluções que antes eram inimagináveis. Essa revolução não apenas redefine a forma como vivemos e trabalhamos, mas também abre novas fronteiras para o futuro da humanidade. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2044...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
