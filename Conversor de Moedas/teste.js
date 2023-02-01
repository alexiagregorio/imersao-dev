/* var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar*cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert(`R$${valorEmReal}`);

*/

var valorEmReal = prompt('Digite um valor em real para converter em dólar.');
var cotacaoDoReal = 0.20;

var valorEmDolar = valorEmReal * cotacaoDoReal;
valorEmDolar = valorEmDolar.toFixed(2);
alert(`R$${valorEmReal} valem US$${valorEmDolar}`)
