var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var hI = parseInt(lines.shift());
var mI = parseInt(lines.shift());
var hF = parseInt(lines.shift());
var mF = parseInt(lines.shift());

if(hI===hF && mI===mF){
	console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
}else if(hI===hF && mI>mF){
	let m = (60-(Math.abs(mI-mF)));
	console.log('O JOGO DUROU 23 HORA(S) E %s MINUTO(S)',m);
}else if(hI<=hF && mI<mF){
	let h = Math.abs(hI-hF);
	let m = Math.abs(mI-mF);
	console.log('O JOGO DUROU %s HORA(S) E %s MINUTO(S)',h,m);
}else if(hI<=hF && mI>mF){
	if(mI>58 && mI<=60){
		let m = (60-(Math.abs(mI-mF)));
		console.log('O JOGO DUROU 0 HORA(S) E %s MINUTO(S)',m);
	}else{
		let h = Math.abs(1-(Math.abs(hI-hF)));
		let m = (60-(Math.abs(mI-mF)));
		console.log('O JOGO DUROU %s HORA(S) E %s MINUTO(S)',h,m);
	}
}else if(hI<=hF && mI===mF){
	let h = ((Math.abs(hI-hF)));
	console.log('O JOGO DUROU %s HORA(S) E 0 MINUTO(S)',h);
}else if(hI>=hF && mI>mF){
	let h = (23-(Math.abs(hI-hF)));
	let m = ((60-(Math.abs(mI-mF))));
	console.log('O JOGO DUROU %s HORA(S) E %s MINUTO(S)',h,m);
}else if(hI>=hF && mI<mF){
	let h = (24-(Math.abs(hI-hF)));
	let m = (Math.abs(mI-mF));
	console.log('O JOGO DUROU %s HORA(S) E %s MINUTO(S)',h,m);
}else if(hI>=hF && mI===mF){
	let h = (24-(Math.abs(hI-hF)));
	console.log('O JOGO DUROU %s HORA(S) E 0 MINUTO(S)',h);
}



