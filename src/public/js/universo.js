// import { get } from "https";

// TROCA DE CONTEUDO DA TELA
function lista(){
    box_universo1.style.display = "none";
    box_universo2.style.display = "none";
    box_bestiario.style.display = "block";
    bestiario.style.display = "none";
    destaque.style.display = "block";
}

function voltar(){
    box_universo1.style.display = "block";
    box_universo2.style.display = "block";
    box_bestiario.style.display = "none";
    bestiario.style.display = "block";
    destaque.style.display = "none";
}

// BARRA DE PESQUISA
function convoque() {
    let pesquisa = busca.value;
    let lista2 = lista();

    // SUMIR COM AS DIV
    document.querySelectorAll('.box_bestiario').forEach(function(el) {
        el.style.display = 'none';
     });

    pesquisa = pesquisa.trimStart().trimEnd();
    let titulo = document.getElementById(pesquisa);

     if (titulo){
        document.querySelectorAll(`#${pesquisa}`).forEach(function(el) {
            el.style.display = 'block';
         });
    }

    if (pesquisa == ""){
        document.querySelectorAll(`.box_bestiario`).forEach(function(el) {
            el.style.display = 'block';
         });
    }
}
