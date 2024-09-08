let section = document.getElementById("resultados-pesquisa");
const main = document.getElementById("main");
const imageLogo = document.getElementById("imageLogo");
const filtros = document.getElementById("filtros"); // seleção de toda seção apenas para animação
const botoesFiltro = document.querySelectorAll(".filtro-opcao");
const body = document.getElementById("body");
const footer = document.getElementById("footer");

let resultados = "";

function pesquisar() {
    imageLogo.style.width = "0rem";
    imageLogo.style.height = "0rem";
    imageLogo.style.opacity = "0"
    main.style.margin = "0";
    section.style.height = "50vh";
    filtros.style.opacity = "1";
    filtros.style.height = "auto";
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Ninguém foi encontrado. </p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado" id="item-resultado">
                <img src="${dado.imagem}" alt="Foto do ${dado.titulo}">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <h3>
                    ${dado.especie} - ${dado.ocupacao}
                </h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `
        }
    }

    if (!resultados) {
        resultados = "<p>Ninguém foi encontrado. Escreva o nome de algum personagem!</p>"
    }
    section.innerHTML = resultados
}

function filtrar(filtroNome, filtroTipo){
    resultados = "";
    section.innerHTML = "";
    for (let dado of dados) {
        let filtroNomeMinusculo = filtroNome.toLowerCase();
        let especieMinusculo = dado[filtroTipo].toLowerCase();

        if (especieMinusculo.includes(filtroNomeMinusculo)){
                resultados += `
            <div class="item-resultado" id="item-resultado">
                <img src="${dado.imagem}" alt="Foto do ${dado.titulo}">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <h3>
                    ${dado.especie} - ${dado.ocupacao}
                </h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `
        }
    }
    section.innerHTML = resultados;
    const itemResultados = document.getElementsByClassName("item-resultado");
    console.log(itemResultados);
            if (filtroTipo.includes("regiao")){
                if(filtroNome.includes("Casa da Árvore")){
                    for(let item of itemResultados){
                        item.style.background = "#04E762";
                    }
                    body.style.backgroundImage = "url(./assets/treehouse.jpg)";
                    footer.style.background = "#008BF8"
                }
                if(filtroNome.includes("Noitosfera")){
                    for(let item of itemResultados){
                        item.style.background = "#FF7881";
                    }
                    body.style.backgroundImage = "url(./assets/noitosphere.jpg)";
                    footer.style.background = "#DB0021"
                }
                if(filtroNome.includes("Reino do Gelo")){
                    for(let item of itemResultados){
                        item.style.background = "#00BADB";
                    }
                    body.style.backgroundImage = "url(./assets/ice-kingdom.jpg)";
                    footer.style.background = "#008BF8"
                }
                if(filtroNome.includes("Reino Doce")){
                    for(let item of itemResultados){
                        item.style.background = "#F34CA2";
                    }
                    body.style.backgroundImage = "url(./assets/candy-kingdom.jpg)";
                    footer.style.background = "#DC0073"
                }
                if(filtroNome.includes("Reino do Fogo")){
                    for(let item of itemResultados){
                        item.style.background = "#F5BB12";
                    }
                    body.style.backgroundImage = "url(./assets/fire-kingdom.jpg)";
                    footer.style.background = "#DB0021"
                }
            }
}