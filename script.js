const botaoCarrossel = document.querySelectorAll(".botao")
const img = document.querySelectorAll(".imagem")
const informacao = document.querySelectorAll(".informacao")

botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mudarImagemDeFundo(indice);

        esconderInformacoesAtiva();

        mostrarInformacao(indice);

    })
});

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');

    botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".imagem.ativa")

    imagemAtiva.classList.remove("ativa");
}


function mudarImagemDeFundo(indice) {
    img[indice].classList.add("ativa");
}

function esconderInformacoesAtiva() {
    const informacaoAtiva = document.querySelector(".informacao.ativa");

    informacaoAtiva.classList.remove("ativa");
}

function mostrarInformacao(indice) {

    informacao[indice].classList.add("ativa");
}

function desativarBotaoSelecionado() {

    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

