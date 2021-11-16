// -> problema
//-> un joven muy afortunado logro ganar el primer premio de la loteria...exacto
//estamos hablando del pobre al que cofla le dio una mano, este pobre decide hacer una fiesta
//para festejar que salio de la pobreza, con este millonario compro una maquina que deja
//pasar solo a personas mayores de edad,entre otras cosas
	//->Dejar pasar solo a mayores de edad
	//->la primer persona que entre despues de las 2am, no paga
let free = false;

const validarCliente = (time)=>{
	let edad = prompt("Cual es tu Edad");
	if(edad > 18){
		if(time>=2 && time < 7 && free == false){
			alert("Podes pasar Gratis!!!");
			free = true;
		}else
			{
				alert("podes pasar papu, pero tenes que pagar");
			}
	}else{
		alert("no podes ingresar papu, sos menor de edad");
	}
}
validarCliente(11);
validarCliente(2);
validarCliente(3);
validarCliente(2);
