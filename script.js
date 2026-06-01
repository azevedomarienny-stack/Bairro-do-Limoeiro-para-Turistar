/* =========================================================
CLIMA REAL
========================================================= */

const cidades = {
    "Maricá": 150,
    "Niterói": 80,
    "Rio de Janeiro": 50
};
const apiKey = "b8145acef5ba4085237b71e7820f5f23"; /*// Chave utilizada para consumo da API OpenWeatherMap*/

async function carregarClima(){

    try{

        const resposta =
        await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Marica,BR&appid=${apiKey}&units=metric&lang=pt_br` /*====OpenWeatherMap=====*/
        );

        const dados =
        await resposta.json();

        const temp =
        Math.round(dados.main.temp);

        const descricao =
        dados.weather[0].description;

        const icon =
        dados.weather[0].icon;

        const iconUrl =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document
        .getElementById("weather")
        .innerHTML = `

            <img src="${iconUrl}" width="45">

            <div>

                <strong>${temp}°C</strong>

                <br>

                ${descricao}

            </div>

        `;

    }

    catch(erro){

        console.log(erro);

    }

}

carregarClima();

const cidade = {
    "Maricá": 150,
    "Niterói": 80,
    "Rio de Janeiro": 50,
    "São Gonçalo": 70
};

cidadeOrigem.addEventListener("keyup", () => {

    const cidade =
    cidadeOrigem.value.trim();

    if(cidades[cidade] !== undefined){

        valorPassagem.innerText =
        cidades[cidade].toFixed(2);

    } else {

        valorPassagem.innerText =
        "0.00";

    }

});

/* =========================================================
CALCULA PREÇO
========================================================= */

cidadeOrigem.addEventListener("keyup", () => {

    /*
    QUALQUER CIDADE FUNCIONA
    */

    const texto =
    cidadeOrigem.value.trim();

    /*
    SE VAZIO
    */

    if(texto.length === 0){

        valorPassagem.innerText = "0.00";

        return;

    }

    /*
    VALOR BASE
    */

    let valor = 150;

    /*
    AUMENTA CONFORME TEXTO
    */

    valor += texto.length * 23;

    /*
    RANDOMIZA MAIS REALISTA
    */

    valor += Math.floor(
        Math.random() * 50
    );

    valorPassagem.innerText =
    valor.toFixed(2);

});

/* =========================================================
MODAIS
========================================================= */

const golpeModalElement =
document.getElementById("golpeModal");

const monicaModalElement =
document.getElementById("monicaModal");

const golpeModal =
new bootstrap.Modal(golpeModalElement);

const monicaModal =
new bootstrap.Modal(monicaModalElement);

/* =========================================================
BOTÃO PAGAR
========================================================= */

document
.getElementById("btnPagar")
.addEventListener("click", () => {

    const cidade =
    cidadeOrigem.value.trim();

    /*
    ACEITA QUALQUER TEXTO
    */

    if(cidade.length < 2){

        alert(
            "Digite uma cidade válida."
        );

        return;

    }

    /*
    VERIFICA SE GEROU PREÇO
    */

    if(valorPassagem.innerText === "0.00"){

        alert(
            "Digite uma cidade primeiro."
        );

        return;

    }

    /*
    ABRE MODAL DO GOLPE
    */

    golpeModal.show();

});

/* =========================================================
CONTINUAR GOLPE
========================================================= */

document
.getElementById("continuarGolpe")
.addEventListener("click", () => {

    /*
    FECHA PRIMEIRO MODAL
    */

    golpeModal.hide();

    /*
    ESPERA FECHAR COMPLETAMENTE
    */

    setTimeout(() => {

        /*
        ABRE MODAL DA MÔNICA
        */

        monicaModal.show();

    }, 600);

});

/* =========================================================
CADASTUR
========================================================= */

const listaAvaliacoes =
document.getElementById("avaliacoes");

document
.getElementById("enviar")
.addEventListener("click", () => {

    const nome =
    document.getElementById("nome");

    const email =
    document.getElementById("email");

    const motivo =
    document.getElementById("motivo");

    /*
    REMOVE BORDAS ANTIGAS
    */

    nome.style.border = "";
    email.style.border = "";

    /*
    VALIDAÇÃO NOME
    */

    if(nome.value.trim().length < 3){

        nome.style.border =
        "2px solid red";

        nome.focus();

        return;

    }

    /*
    VALIDAÇÃO EMAIL
    */

    if(
        !email.value.includes("@")
        ||
        !email.value.includes(".")
    ){

        email.style.border =
        "2px solid red";

        email.focus();

        return;

    }

    /*
    VALIDAÇÃO TEXTO
    */

    if(motivo.value.trim().length < 5){

        motivo.style.border =
        "2px solid red";

        motivo.focus();

        return;

    }

    /*
    ESTRELAS
    */

    const estrelas =
    Math.floor(Math.random() * 5) + 1;

    /*
    CRIA CARD DE AVALIAÇÕES
    */

    const avaliacao =
    document.createElement("div");

    avaliacao.className =
    "glass p-4 mb-4";

    /*
    HTML
    */

    avaliacao.innerHTML = `

        <div class="d-flex justify-content-between align-items-center mb-3">

            <div>

                <h4>${nome.value}</h4>

                <small>${email.value}</small>

            </div>

            <div class="fs-4">

                ${"⭐".repeat(estrelas)}

            </div>

        </div>

        <p>

            ${motivo.value}

        </p>

    `;

    /*
    ADICIONA NO FINAL DO SITE
    */

    listaAvaliacoes.prepend(avaliacao);

    /*
    LIMPA CAMPOS
    */

    nome.value = "";
    email.value = "";
    motivo.value = "";

    motivo.style.border = "";

});

/* =========================================================
SCROLL SUAVE (DESLIZA PARA A PARTE CORRETA DO SITE DE MANEIRA BONITA E MODERNA)
========================================================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document
        .querySelector(
            this.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* =========================================================
MODAL PRODUTOS
========================================================= */

const produtoModal =
new bootstrap.Modal(
    document.getElementById("produtoModal")
);

/* =========================================================
BOTÕES COMPRAR
========================================================= */

document
.querySelectorAll(".comprar-btn")
.forEach(botao => {

    botao.addEventListener("click", () => {

        produtoModal.show();

    });

});
