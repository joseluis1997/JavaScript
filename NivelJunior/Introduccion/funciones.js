// function test (numero){
// 	if(numero == 0){
// 		return 1;
// 	}else{
// 		return test (numero - 1) * numero;
// 	}
// }
// console.log(test(5));

var a = parseInt(prompt("Digite la base"));
var b = parseInt(prompt("Digite el Exponente"));

document.write(CalcularPotencia());

function CalcularPotencia(a,b){
	if(a>0 && b>0){
		resultado = Math.pow(a,b);
		return CalcularPotencia(a,b);
	}else{
		return 0;
	}
}