const projetos = [
	{
		nome: "Landing Page apenas com JavaScript puro",
		descrição:
			"Nesse projeto eu foquei em usar só JS para criar, estilizar e dar funções aos elementos. Ao clicar no botão ao lado do container com o texto no centro da tela, os estilos e conteúdos mudam em conjunto, esse botão tem uma animação personalizada de clique. Há um menu clicável no canto superior esquerdo com elementos animados. O footer tem uma animação igual a do menu ao passar o mouse sobre os botões.",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/landing-page.png",
		link: "https://codepen.io/augusto404/full/bGxyoGV"
	},
	{
		nome: "Página de produto",
		descrição:
			"Página de produto no estilo mobile first com responsividade para desktop. Todos os elementos da página foram criados usando apenas JavaScript e CSS. Foi interessante fazer um projeto funcionar usando apenas JS para criar as tags HTML e adicionar atributos. Os botões que ficam abaixo da descrição do produto são funcionais, o de adicionar o produto ao carrinho exibe uma mensagem temporária ao ser clicado, e as setas mudam entre as diferentes opções de sneakers. A fonte de cada imagem aparece no footer da página junto com o nome do autor.",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/pagina-de-produto.png",
		link: "https://codepen.io/augusto404/full/KKxbrMw"
	},
	{
		nome: "Tela de login e cadastro no estilo mobile first",
		descrição:
			'Os temas mudam automaticamente a cada cinco segundos. Os botões de "Login" e "Criar Conta" são clicáveis e exibem uma mensagem temporária que teoricamente ficaria presente no tempo entre o carregamento da página atual para a próxima.',
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/login-e-cadastro.png",
		link: "https://codepen.io/augusto404/full/oNPQROp"
	},
	{
		nome: "timer pomodoro e relógio digital",
		descrição:
			"Esse projeto é um relógio digital e timer pomodoro esteticamente simples para ser usado em momentos de estudo, trabalho e/ou atividades que exigem concentração por longos períodos. Por padrão, é apresentado um relógio. Ao clicar nos botões, pode ser iniciado o timer para a seção de foco ou para os minutos de descanso, além do último botão permitir que os temas sejam mudados manualmente. A cada ciclo finalizado, seja de foco ou descanso, um som de notificação toca para lembrar da conclusão da seção e o tema muda automaticamente.",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/pomodoro%20timer.png",
		link: "https://codepen.io/augusto404/full/ZEMrKMg"
	},
	{
		nome: "link in bio",
		descrição:
			"Site no estilo link in bio voltado para dispositivos móveis. Uso esse site para listar os principais links úteis sobre mim, colocando na bio do Instagram, no GitHub e nas informações de contato no meu perfil aqui no LinkedIn.",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/link-in-bio.png",
		link: "https://codepen.io/augusto404/full/XWPEBzX"
	},
	{
		nome: "cartão de crédito com animação",
		descrição:
			"Criei esse projeto para exercitar o que aprendi sobre armazenamento de dados em vetores e como posso utilizar funções para criar eventos dentro do documento HTML. Coloquei os conjuntos de cores dentro de funções que ficam dentro de uma array, eles modificam o plano de fundo, o cartão, e os links do footer. Adicionei algumas transições simples com CSS para que as mudanças de cores tenham um aspecto mais natural. A mudança de estilos acontece a cada cinco segundos, mas pode ser adiantada ao clicar no cartão.",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/credit-card.png",
		link: "https://codepen.io/augusto404/full/abaJLpQ"
	},
	{
		nome: "formulário de inscrição para newsletter de astronomia",
		descrição: "",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/newsletter-astronomia.png",
		link: "https://augusto404.github.io/FormularioNewsletter"
	}
];

// criar elementos para cada projeto dentro da array
window.addEventListener("load", () => {
	const containerProjetos = document.querySelector(".projetos");

	for (objeto in projetos) {
		const projeto = `
			<section title="${projetos[objeto].nome} | ${projetos[objeto].descrição}">
				<a href="${projetos[objeto].link}" rel="external" target="_blank">
					<img src="${projetos[objeto].imagem}" alt='${projetos[objeto].nome}'>
				</a>
			</section>
		`;

		containerProjetos.innerHTML += projeto;
	}
});

// o tema padrão é claro
// essa escolha foi feita pra aplicar as coisas que são feitas com JS assim que a página carregar
function mudarCores(tema = "temaClaro") {
	// paleta de cores de cada tema
	const cores = {
		temaClaro: {
			body: "#cbb798",
			headers: "#51524b",
			icone: "sandybrown",
			bordaHeaders: "#51524b",
			bordas: "black",
			boxShadow: "black",
			paragrafo: "olive"
		},
		temaEscuro: {
			body: "#24261A",
			headers: "#77AED9",
			icone: "darkblue",
			bordaHeaders: "darkgrey",
			bordas: "#5B89A6",
			boxShadow: "#385C73",
			paragrafo: "#3A4031"
		}
	};

	// ecurtando as declarações dos seletores dos elementos no html
	const elementos = {
		body: document.querySelector("body"),
		icone: document.querySelector(".mudar-tema"),
		headers: document.querySelectorAll("h1, h2"),
		paragrafo: document.querySelector(".apresentacao p"),
		bordaCaixas: document.querySelectorAll(".projetos section, .mudar-tema"),
		projetos: document.querySelectorAll(".projetos section")
	};

	elementos.body.style.backgroundColor = cores[tema].body;
	elementos.icone.style.backgroundColor = cores[tema].icone;

	// cor do texto e borda iferior dos headers
	for (let i = 0; i < elementos.headers.length; i++) {
		elementos.headers[i].style.color = cores[tema].headers;
		elementos.headers[i].style.borderBottom = `2px solid ${cores[tema].headers}`;
	}

	// borda dos elementos
	for (let i = 0; i < elementos.bordaCaixas.length; i++) {
		elementos.bordaCaixas[i].style.border = `2px solid ${cores[tema].bordas}`;
	}
	elementos.paragrafo.style.border = `2px solid ${cores[tema].bordas}`;

	// para cada elemento que passar o mouse, haverá esse efeito
	elementos.paragrafo.style.background = cores[tema].paragrafo;
	for (let i = 0; i < elementos.bordaCaixas.length; i++) {
		elementos.bordaCaixas[i].addEventListener("mouseover", () => {
			elementos.bordaCaixas[i].style.transform = "translate(-3px, -3px)";
			elementos.bordaCaixas[
				i
			].style.boxShadow = `3px 3px ${cores[tema].boxShadow}`;
		});
		elementos.bordaCaixas[i].addEventListener("mouseout", () => {
			elementos.bordaCaixas[i].style.transform = "translate(0px, 0px)";
			elementos.bordaCaixas[i].style.boxShadow = "0px 0px transparent";
		});

		// efeito do clique no botão de tema e nos projetos
		elementos.bordaCaixas[i].addEventListener("click", () => {
			elementos.bordaCaixas[i].style.transform = "translate(0px, 0px)";
			elementos.bordaCaixas[i].style.boxShadow = "0px 0px transparent";

			setTimeout(() => {
				elementos.bordaCaixas[i].style.transform = "translate(-3px, -3px)";
				elementos.bordaCaixas[
					i
				].style.boxShadow = `3px 3px ${cores[tema].boxShadow}`;
			}, 200);
		});
	}
}

// mudar icone ao clicar no botão
const botão = document.querySelector(".mudar-tema");
const icone = document.querySelector(".mudar-tema span");
let temaSelecionado = "";

function mudarIcone() {
	if (icone.classList.contains("tema-noite")) {
		icone.classList.remove("tema-noite");
		icone.classList.add("tema-dia");
		icone.innerText = "light_mode";
		temaSelecionado = "temaEscuro";
	} else {
		icone.classList.remove("tema-dia");
		icone.classList.add("tema-noite");
		icone.innerText = "dark_mode";
		temaSelecionado = "temaClaro";
	}

	mudarCores(temaSelecionado);
}
botão.addEventListener("click", mudarIcone);
window.addEventListener("load", mudarIcone); // assim que a página carregar, os estilos carregam junto
