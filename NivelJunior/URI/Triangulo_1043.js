//Aplicando Teorema de desigualdad
var input = requiere ('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

var test_1 = a + c;
var test_2 = b + c;
var test_3 = a + b;

if(test_1 > b){
	if(test_2 > a){
        if(test_3 > c){
            let p;
            console.log("Area = " + p = a + b + c);
        }
    }
}else{
    let A;
    A = ((b + b)/2)*c;
    console.log("Perimetro = "+A);
}


