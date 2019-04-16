
function calcular() {

    var adultos1 = parseInt(document.querySelector('#adultos1').value);
    var adultos2 = parseInt(document.querySelector('#adultos2').value);
    var criancas = parseInr(document.querySelector('#criancas').value);

    var adultos1Element = window.document.getElementById("adultos1");
    var adultos1String = adultos1Element.value;
    var adultos2Element = window.document.getElementById("adultos2");
    var adultos2String = adultos2Element.value;
    var criancasElement = window.document.getElementById("criancas");
    var criancasString = criancasElement.value;


    var calcularCarne = (adultos1 * 0.5) + (criancas * 0.25);
    var calcularPao = adultos2 * 5;

    alert("É necessário" +calcularCarne+ "Kg de carne");
    alert("É necessário" +calcularPao+ "Pães");

}