function abrirFiltro() {
    var filtro = document.getElementById("modalFiltro");
    filtro.style.display = "block";
    setTimeout(function() {
        filtro.classList.add("aberto");
    }, 10); 
}

function fecharFiltro() {
    var filtro = document.getElementById("modalFiltro");
    filtro.classList.remove("aberto");
    setTimeout(function() {
        filtro.style.display = "none";
    }, 300);
}

function mostrarInput() {
    var selectValor = document.getElementById("filtro").value;
    var divInput = document.getElementById("inputValor");

    if (selectValor === "") {
        divInput.style.display = "none";
        document.getElementById("radioButtons").style.display = "none";
    } else {
        divInput.style.display = "block";
    }
}

function mostrarRadio() {
    var inputValor = document.getElementById("valor").value.trim();
    var radioButtons = document.getElementById("radioButtons");

    if (inputValor === "") {
        radioButtons.style.display = "none";
    } else {
        radioButtons.style.display = "block";
    }
}

document.getElementById("option1").addEventListener("click", abrirFiltro);
document.getElementById("option2").addEventListener("click", abrirFiltro);

function filtrar() {
    var filtroSelecionado = document.querySelector('input[name="option"]:checked').value;
    var valorFiltro = document.getElementById("valor").value.trim().toLowerCase();
    var tabela = document.getElementById("tabela");
    var linhas = tabela.getElementsByTagName("tr");

    for (var i = 0; i < linhas.length; i++) {
        if (i === 0) continue;

        var celulas = linhas[i].getElementsByTagName("td");
        var mostrarLinha = false;
        for (var j = 0; j < celulas.length; j++) {
            var textoCelula = celulas[j];
            if (textoCelula) {
                var texto = textoCelula.textContent || textoCelula.innerText;
                if (filtroSelecionado === "option1" || filtroSelecionado === "option2") {
                    abrirFiltro();
                    break;
                } else if (filtroSelecionado === "contem" && texto.toLowerCase().includes(valorFiltro)) {
                    mostrarLinha = true;
                    break;
                } else if (filtroSelecionado === "naoContem" && !texto.toLowerCase().includes(valorFiltro)) {
                    mostrarLinha = true;
                    break;
                } else if (filtroSelecionado === "igual" && texto.toLowerCase() === valorFiltro) {
                    mostrarLinha = true;
                    break;
                } else if (filtroSelecionado === "diferente" && texto.toLowerCase() !== valorFiltro) {
                    mostrarLinha = true;
                    break;
                } else if (filtroSelecionado === "comecaCom" && texto.toLowerCase().startsWith(valorFiltro)) {
                    mostrarLinha = true;
                    break;
                } else if (filtroSelecionado === "terminaCom" && texto.toLowerCase().endsWith(valorFiltro)) {
                    mostrarLinha = true;
                    break;
                } else if (filtroSelecionado === "vazio" && texto.trim() === "") {
                    mostrarLinha = true;
                    break;
                } else if (filtroSelecionado === "naoVazio" && texto.trim() !== "") {
                    mostrarLinha = true;
                    break;
                }
            }
        }
        if (mostrarLinha) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}
