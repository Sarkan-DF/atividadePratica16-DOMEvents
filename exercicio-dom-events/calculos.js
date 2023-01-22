let salario = JSON.parse(localStorage.getItem("salario")) || [];

const valorBase = (document.getElementById("valor_base"));
const valorTransporte = (document.getElementById("valor_transporte"));
const valorAlimentacao = (document.getElementById("valor_alimentacao"));

const valorAutomovel = (document.getElementById("valor_automovel"));
const faltas = (document.getElementById("faltas"));

function calculaReceita() {

    const valorBaseNumber = parseFloat(valorBase.value);
    const valorTransporteNumber = parseFloat(valorTransporte.value);
    const valorAlimentacaoNumber = parseFloat(valorAlimentacao.value);
    const valorReceita = (valorBaseNumber + valorTransporteNumber + valorAlimentacaoNumber);

    const valorAutomovelNumber = parseFloat(valorAutomovel.value);
    const faltasNumber = parseFloat(faltas.value);
    const valorDescontos = (valorAutomovelNumber + faltasNumber);

    const total = (valorReceita - valorDescontos);

    const objValorReceita = {
        valorBaseNumber: valorBaseNumber,
        valorTransporteNumber: valorTransporteNumber,
        valorAlimentacaoNumber: valorAlimentacaoNumber,
        valorReceita: valorReceita,
        valorAutomovelNumber: valorAutomovelNumber,
        faltasNumber: faltasNumber,
        valorDescontos: valorDescontos,
        total: total
    };

    salario.push(objValorReceita);
    document.getElementById("valor_receita").value = valorReceita;
    document.getElementById("valor_descontos").value = valorDescontos;
    document.getElementById("valor_total").value = total;
    saveOnStorage();
    salario = [];
};


function saveOnStorage() {
    localStorage.setItem("salario", JSON.stringify(salario));
};