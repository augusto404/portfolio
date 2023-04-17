// o tema padrão é escuro
function mudarCores(tema = "temaEscuro") {
	// definindo paleta de cores geral
	const cores = {
		background001: "#002b36",
		background002: "#073642",
		background003: "#eee8d5",
		background004: "#fdf6e3",
		conteudo001: "#93a1a1",
		conteudo002: "#839496",
		conteudo003: "#657b83",
		conteudo004: "#586e75",
		destaques001: "#d33682",
		destaques002: "#b58900",
		destaques003: "#cb4b16",
		destaques004: "#2aa198"
	};

	// selecionando elementos
	const elementos = {
		body: document.querySelector("body"),
		header: document.querySelector("header"),
		headerTitulo: document.querySelector("header h1"),
		headerParagrafo: document.querySelector("header p"),
		botãoMudarTema: document.querySelector(".mudar-tema"),
		botãoMudarTemaIcone: document.querySelector(".mudar-tema span"),
		projetoBackground: document.querySelectorAll(".projeto"),
		projetoTitulo: document.querySelectorAll(".projeto h2"),
		projetoLinks: document.querySelectorAll(".botoes a"),
		footerLinks: document.querySelectorAll("footer a")
	};

	// criando os presets de cores dos temas
	const presetsTemas = {
		temaClaro: {
			bodyTexto: cores.conteudo003,
			bodyBackground: cores.background003,
			headerBackground: cores.background004,
			headerTitulo: cores.conteudo004,
			headerParagrafo: cores.conteudo003,
			botãoMudarTemaBackground: cores.background001,
			botãoMudarTemaIcone: cores.destaques001,
			projetoBackground: cores.background002,
			projetoTitulo: cores.conteudo001,
			projetoLinks: cores.destaques002,
			projetoLinksBorda: `1.5px solid ${cores.destaques002}`,
			footerLinks: cores.conteudo003
		},
		temaEscuro: {
			bodyTexto: cores.conteudo002,
			bodyBackground: cores.background001,
			headerBackground: cores.background002,
			headerTitulo: cores.conteudo001,
			headerParagrafo: cores.conteudo002,
			botãoMudarTemaBackground: cores.background004,
			botãoMudarTemaIcone: cores.destaques002,
			projetoBackground: cores.background003,
			projetoTitulo: cores.destaques003,
			projetoLinks: cores.destaques004,
			projetoLinksBorda: `1.5px solid ${cores.destaques004}`,
			footerLinks: cores.conteudo002
		}
	}

	// aplicando cores nos elementos
	elementos.body.style.color = presetsTemas[tema].bodyTexto;
	elementos.body.style.backgroundColor = presetsTemas[tema].bodyBackground;
	elementos.header.style.backgroundColor = presetsTemas[tema].headerBackground;
	elementos.headerTitulo.style.color = presetsTemas[tema].headerTitulo;
	elementos.headerParagrafo.style.color = presetsTemas[tema].headerParagrafo;
	elementos.botãoMudarTema.style.backgroundColor = presetsTemas[tema].botãoMudarTemaBackground;
	elementos.botãoMudarTemaIcone.style.color = presetsTemas[tema].botãoMudarTemaIcone;

	// usando laços de repetição para aplicar estilos em vários elementos com a mesma classe
	for (let i = 0; i < elementos.projetoBackground.length; i++) {
		elementos.projetoBackground[i].style.backgroundColor = presetsTemas[tema].projetoBackground;
		elementos.projetoTitulo[i].style.color = presetsTemas[tema].projetoTitulo;

		for (let j = 0; j < elementos.projetoLinks.length; j++) {
			elementos.projetoLinks[j].style.color = presetsTemas[tema].projetoLinks;

			elementos.projetoLinks[j].addEventListener("mouseover", () => {
				elementos.projetoLinks[j].style.border = presetsTemas[tema].projetoLinksBorda;
			});
			elementos.projetoLinks[j].addEventListener("mouseout", () => {
				elementos.projetoLinks[j].style.border = "1.5px solid transparent";
			});
		}
	}

	for (let i = 0; i < elementos.footerLinks.length; i++) {
		elementos.footerLinks[i].style.color = presetsTemas[tema].footerLinks;
	}
}

// mudar icone ao clicar no botão
const botão = document.querySelector(".mudar-tema");
const icone = document.querySelector(".mudar-tema span");

function mudarIcone() {
	if (icone.classList.contains("tema-noite")) {
		icone.classList.remove("tema-noite");
		icone.classList.add("tema-dia");
		icone.innerText = "light_mode";
		mudarCores("temaEscuro");
	} else {
		icone.classList.remove("tema-dia");
		icone.classList.add("tema-noite");
		icone.innerText = "dark_mode";
		mudarCores("temaClaro");
	}
}
botão.addEventListener("click", mudarIcone);

function criarProjetos() {
	const projetos = [
		{
			nome: "Landing page",
			documentação: "https://codepen.io/augusto404/details/bGxyoGV",
			imagem: "landing-page.png",
			link: "https://codepen.io/augusto404/full/bGxyoGV"
		},
		{
			nome: "Página de produto",
			documentação: "https://codepen.io/augusto404/details/KKxbrMw",
			imagem: "pagina-de-produto.png",
			link: "https://codepen.io/augusto404/full/KKxbrMw"
		},
		{
			nome: "Login / Cadastro",
			documentação: "https://codepen.io/augusto404/details/oNPQROp",
			imagem: "login-e-cadastro.png",
			link: "https://codepen.io/augusto404/full/oNPQROp"
		},
		{
			nome: "Pomodoro timer",
			documentação: "https://codepen.io/augusto404/details/ZEMrKMg",
			imagem: "pomodoro%20timer.png",
			link: "https://codepen.io/augusto404/full/ZEMrKMg"
		},
		{
			nome: "Link in bio",
			documentação: "https://github.com/augusto404/augusto404.github.io",
			imagem: "link-in-bio.png",
			link: "https://augusto404.github.io"
		},
		{
			nome: "Cartão de crédito",
			documentação: "https://codepen.io/augusto404/details/abaJLpQ",
			imagem: "credit-card.png",
			link: "https://codepen.io/augusto404/full/abaJLpQ"
		},
		{
			nome: "Cadastro em newsletter",
			documentação: "https://github.com/augusto404/FormularioNewsletter",
			imagem: "newsletter-astronomia.png",
			link: "https://augusto404.github.io/FormularioNewsletter"
		}
	];
	const main = document.querySelector("main");

	for (projeto in projetos) {
		const containerProjeto = `
 			<section class="projeto">
				<img src="img/${projetos[projeto].imagem}">
				<h2>${projetos[projeto].nome}</h2>
				<div class="botoes">
					<a href="${projetos[projeto].documentação}" target="_blank">Detalhes</a>
					<a href="${projetos[projeto].link}" target="_blank">Visualizar</a>
				</div>
			</section>
 		`;

		main.innerHTML += containerProjeto;
	}

	mudarCores();
}
window.addEventListener("load", criarProjetos);