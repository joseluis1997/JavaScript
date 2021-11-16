var s = parseFloat(prompt());

if(s>=0 && s<=400){
	let n = console.log(`Novo salario: %s`,(s+(s*0.15)).toFixed(2));
	let r = console.log(`Reajuste ganho: %s`,(s*0.15).toFixed(2));
	let e = console.log(`Em percentual: %s %`,(s*0,15));
}else if(s>400 && s<=800){
	let n = console.log(`Novo salario: %s`,(s+(s*0.12)).toFixed(2));
	let r = console.log(`Reajuste ganho: %s`,(s*0.12).toFixed(2));
	let e = console.log(`Em percentual: %s %`,(s*0,12));
}else if(s>800 && s<=1200){
	let n = console.log(`Novo salario: %s`,(s+(s*0.10)).toFixed(2));
	let r = console.log(`Reajuste ganho: %s`,(s*0.10).toFixed(2));
	let e = console.log(`Em percentual: %s %`,(s*0,10));
}else if(s>1200 && s<=2000){
	let n = console.log(`Novo salario: %s`,(s+(s*0.07)).toFixed(2));
	let r = console.log(`Reajuste ganho: %s`,(s*0.07).toFixed(2));
	let e = console.log(`Em percentual: %s %`,(s*0,7));
}else{
	let n = console.log(`Novo salario: %s`,(s+(s*0.04)).toFixed(2));
	let r = console.log(`Reajuste ganho: %s`,(s*0.04).toFixed(2));
	let e = console.log(`Em percentual: %s %`,(s*0,4));
}