const projetos = [
	{
		nome: "página de login e cadastro",
		descrição: "",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/login-e-cadastro.png",
		link: "https://codepen.io/augusto404/full/oNPQROp"
	},
	{
		nome: "timer pomodoro e relógio digital",
		descrição: "",
		imagem: "https://raw.githubusercontent.com/augusto404/portfolio/main/img/pomodoro%20timer.png",
		link: "https://codepen.io/augusto404/full/ZEMrKMg"
	},
	{
		nome: "link in bio",
		descrição: "",
		imagem:
			"https://raw.githubusercontent.com/augusto404/portfolio/main/img/link-in-bio.png",
		link: "https://codepen.io/augusto404/full/XWPEBzX"
	},
	{
		nome: "cartão de crédito com animação",
		descrição: "",
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
function criarElementosDosProjetos(valor) {
	let objeto = valor;

	let containerProjetos = document.querySelector(".projetos");
	let elementoSection = document.createElement("section");
	let elementoImg = document.createElement("img");
	let elementoLink = document.createElement("a");

	containerProjetos.appendChild(elementoSection);
	elementoSection.appendChild(elementoLink);
	elementoLink.appendChild(elementoImg);

	elementoImg.setAttribute("src", objeto.imagem);
	elementoImg.setAttribute("alt", "Foto do projeto");

	elementoLink.setAttribute("href", objeto.link);
	elementoLink.setAttribute("rel", "external");
	elementoLink.setAttribute("target", "_blank");
}
window.addEventListener("load", () => {
	for (let objeto in projetos) {
		criarElementosDosProjetos(projetos[objeto]);
	}
});

/* === Tema escuro  === */
document.querySelector(".mudar-tema").addEventListener("click", mudarTema);

function mudarTema() {
	function mudarCores(temaSelecionado) {
		let body = document.querySelector("body");
		let icone = document.querySelector(".mudar-tema");
		let headers = document.querySelectorAll("h1, h2");
		let bordaHeaders = document.querySelectorAll("h1, h2");
		let paragrafo = document.querySelector(".apresentacao p");
		let bordas = document.querySelectorAll(
			".apresentacao p, .projetos section, .mudar-tema"
		);

		// estou usando esse método de armazenamento de dados em objetos para treinar o que estudei recentemente
		const cores = {
			temaClaro: {
				body: "#cbb798",
				headers: "#51524b",
				icone: "sandybrown",
				bordaHeaders: "#51524b",
				bordas: "black",
				boxShadow: "3px 3px black",
				paragrafo: "olive"
			},
			temaEscuro: {
				body: "#24261A",
				headers: "#77AED9",
				icone: "darkblue",
				bordaHeaders: "darkgrey",
				bordas: "#5B89A6",
				boxShadow: "3px 3px #385C73",
				paragrafo: "#3A4031"
			}
		};

		body.style.background = cores[temaSelecionado].body;
		icone.style.background = cores[temaSelecionado].icone;
		paragrafo.style.background = cores[temaSelecionado].paragrafo;

		// aplicando estilos em todos os elementos da Node List
		for (let index = 0; index < headers.length; index++) {
			headers[index].style.color = cores[temaSelecionado].headers;
		}
		for (let index = 0; index < bordas.length; index++) {
			bordas[index].style.borderColor = cores[temaSelecionado].bordas;
		}
		for (let index = 0; index < bordas.length; index++) {
			bordas[index].style.boxShadow = cores[temaSelecionado].boxShadow;
		}
		for (let index = 0; index < bordaHeaders.length; index++) {
			bordaHeaders[index].style.borderColor = cores[temaSelecionado].bordaHeaders;
		}
	}

	function mudarIcone() {
		let iconeDia = document.querySelector(".tema-dia");
		let iconeNoite = document.querySelector(".tema-noite");
		let temaSelecionado;

		const iconeDiaOculto = iconeDia.style.display == "none";
		const iconeNoiteVisivel = iconeNoite.style.display == "block";

		if (iconeDiaOculto && iconeNoiteVisivel) {
			iconeDia = iconeDia.style.display = "block";
			iconeNoite = iconeNoite.style.display = "none";
			temaSelecionado = "temaEscuro";
		} else {
			iconeDia = iconeDia.style.display = "none";
			iconeNoite = iconeNoite.style.display = "block";
			temaSelecionado = "temaClaro";
		}

		mudarCores(temaSelecionado);
	}
	mudarIcone();
}
