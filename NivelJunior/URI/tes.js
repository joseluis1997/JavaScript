var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var num1 = parseInt(lines.shift());
var num2 = parseInt(lines.shift());
var num3 = parseInt(lines.shift());

console.log(num1);
console.log(num2);
console.log(num3);
var menor = 0, medio = 0, mayor = 0;

if(parseInt(num1) < parseInt(num2) && parseInt(num1) < parseInt(num3)){
	menor = num1;
	if(parseInt(num2) < parseInt(num3)){
		medio = num2;
		mayor = num3;
	}else{
		medio = num3;
		mayor = num2;
	}
}

else if(parseInt(num2) < parseInt(num1) && parseInt(num2) < parseInt(num3)){
	menor = num2;
	if(parseInt(num1) < parseInt(num3)){
		medio = num1;
		mayor = num3;
	}else{
		medio = num3;
		mayor = num1;
	}
}

else{
	menor = num3;
	if(parseInt(num1) < parseInt(num2)){
		medio = num1;
		mayor = num2;
	}else{
		medio = num2;
		mayor = num1;
	}
}

console.log(menor+"\n"+medio+"\n"+mayor+"\n\n");
console.log(num1+"\n"+num2+"\n"+num3);