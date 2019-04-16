
function calcular() {
    var adultos1 = parseInt(document.querySelector('#adultos1').value);
    var adultos2 = parseInt(document.querySelector('#adultos2').value);
    var criancas = parseInr(document.querySelector('#criancas').value);

    var calcularCarne = (adultos1 * 0.5) + (criancas * 0.25);
    var calcularPao = adultos2 * 5;

    alert("É necessário" +calcularCarne+ "Kg de carne");
    alert("É necessário" +calcularPao+ "Pães");

}