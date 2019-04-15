
function calcularQuantidade() {
    var quantidade_de_carne = window.document.getElementById("adultos1");
    var adultos1String = adultos1Element.value;
    var quantidade_de_carne = window.document.getElementById("adultos2");
    var adultos2String = adultos2Element.value;
    var quantidade_de_carne = window.document.getElementById("criancas");
    var criancasString = criancasElement.value;
    
    console.log("idadeString = " + idadeString);
    var idade = parseInt(idadeString);
    if (idade >= 18) {
        alert("MAIOR de idade.");
    } else {
        alert("MENOR de idade.");
    }
}