const calculadoraB = (num1, num2)=>{
	num1 = prompt("Digite el primer numero");
	num2 = prompt("Digite el Segundo numero");
	operacion = prompt("Que Operacion desea realizar: 1-.Suma, 2-.Resta, 3-.Multiplicasion, 4-.Divicion");

	if(operacion == "1"){
		resultado = parseInt(num1) + parseInt(num2);
		return "<b>la suma es: </b>" + resultado;
	}else if(operacion == "2"){
		resultado = parseInt(num1) - parseInt(num2);
		return "<b>La resta es: </b>" + resultado;
	}else if(operacion == "3"){
		resultado = parseInt(num1) * parseInt(num2);
		return "<b>la multiplicacion es: </b>" + resultado;
	}else{
		resultado = parseInt(num1) / parseInt(num2);
		return "<b>La Divicion es: </b>" + resultado;
	}
}
document.write( calculadoraB());
