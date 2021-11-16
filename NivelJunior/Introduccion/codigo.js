// let frutas = ["banana", "Manzana",5,9, "Pedro"];
// document.write(frutas[4])

// arrays asociativos-> son objetos

// let pc1 = {
// 	nombre : "pclucho",
// 	procesador : "Intel core i3",
// 	ram : "4GB",
// 	espacio : "1TB"
// }
// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];

// frase = `El nombre de mi pc es: <b>${nombre}</b> <br>
// 		el procesador es: <b>${procesador}</b> <br>
// 		la memoria ram es de: <b>${ram}</b> <br>
// 		el espacio en disco es de: <b>${espacio}</b>`;
// document.write(frase);

// Bucles y iteracion
var numero = 0;
// if-> solo se ejecuta una sola ves
	// while(numero < 10){
	// 	numero++;
	// 	document.write(numero);
	// }
// while-> se ejecuta hasta que se cumpla una condicion
	// while(numero < 10){
	// 	numero++;
	// 	document.write(numero);
	// }
//  do while-> primero se hace, luego se pregunta la condicion
	// do{
	// 	document.write(numero +"<br>");
	// 	numero++;
	// }while(numero >6)
// break-> termina una sentencia
	// while(numero < 1000){
	// 	numero++;
	// 	document.write(numero);
	// 	if (numero == 10) {
	// 		break;
	// 	}
	// }
// sentencia for-> y for continue
	// for(let i=0; i<20; i++){
	// 	if(i == 12){
	// 		continue;
	// 	}
	// 	document.write(i+ "<br>");
	// }
// sentencia for in-> nos devuelve la posicion del elemento de un arreglo
// let animales = ["gato", "perro","tiranosaurio rex"];
// for(animal in animales){
// 	document.write(animal +"<br>");
// }
// document.write("<br>");
// sentencia for of-> nos muestra el valor de los elementos
// for(animal of animales){
// 	document.write(animal +"<br>");
// }
// sentencia label-> es un sentecia que nos permite asociar
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo", array1, "josefina"];

// forluchito:
// for(let array in array2){
// 	if(array == 2){
// 		for(let array of array1){
// 			continue forluchito;
// 			document.write(array + " <br> ");
// 		}
// 	}else{
// 		document.write(array2[array] + " <br> ");
// 	}
// }

// funciones-> solo es una porcion de codigo, el cual podemos reutilizarlo

// function saludar(){
// 	respuesta =prompt("hola lucas como fue tu dia");
// 	if(respuesta == "bien"){
// 		alert("Me alegro");
// 	}else{
// 		alert("Una pena");
// 	}
// }

// funciones con return

// function saludar(){
// 	alert("holaaaaaa");
// 	return "Se ejecuto correctamente la funcion";
// }

// saludo = saludar();
// document.write(saludo);

// function saludar(nombre){
// 	let frase = `hola ${nombre}!, como estas`;
// 	document.write(frase);
// }
// var nombre = prompt("Como te llamas?");
// saludar(nombre);

// scope funciones-> el scope de las funciones es regional,
// cuando creamos una variable para una funcion, afuera no existe esa varible

// funciones tipo flecha
const saludar = ()=>{
	document.write("hola, esto es otra forma de funcion flecha");
}
saludar();
// const saludar = nombre => document.write("hola");//una forma mas simplificada, y cuando se pasa un solo parametro
// saludar();




