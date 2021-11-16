function triangulo(a,b,c){
	if(a===b && b===c){
		return console.log("TRIANGULO EQUILATERO");
	}else if(a===b || a===c ||b===c){
		return console.log("TRIANGULO ISOSCELES");
	}
}

function ordenando(a,b,c) {
    let mayor, medio, menor;
    if(a>b && a>c){
        mayor=a;
        if(b>c){
            medio = b;
            menor = c;
        }else{
            medio = c;
            menor = b;
        }
    }else if(b>a && b>c){
        mayor = b;
        if(a>c){
            medio = a;
            menor = c;
        }else{
            medio = c
            menor = a;
        }
    }else{
        mayor = c;
        if(a>b){
            medio = a;
            menor = b;
        }else{
            medio = b;
            menor = a;
        }
    }
    return [mayor,medio,menor];
}

var a = parseFloat(prompt());
var b = parseFloat(prompt());
var c = parseFloat(prompt());

var r = ordenando(a,b,c);

var aa = r.shift();
var bb = r.shift();
var cc = r.shift();

if(aa>=bb + cc){
   console.log("NAO FORMA TRIANGULO");
}else if(Math.pow(aa,2) === Math.pow(bb,2)+Math.pow(cc,2)){
    console.log("TRIANGULO RETANGULO");
    triangulo(a,b,c);
}else if(Math.pow(aa,2) > Math.pow(bb,2)+Math.pow(cc,2)){
    console.log("TRIANGULO OBTUSANGULO");
    triangulo(a,b,c);
}else if(Math.pow(aa,2) < Math.pow(bb,2)+Math.pow(cc,2)){
    console.log("TRIANGULO ACUTANGULO");
    triangulo(a,b,c);
}else{
    triangulo(a,b,c);
}


