var i = parseInt(prompt());
var f = parseInt(prompt());

var c0=0;

if(i===0 && f===0 || i===f){
	console.log('O JOGO DUROU 24 HORA(S)');
}else if(i>=0 && f<=24 && i<13 && f>=1){
	if(i<=f){
		for(var i=i;i<f;i++){
			c0++;
		}
	console.log('O JOGO DUROU %s HORA(S)',c0);
	}else if(i>=f){
		for(var ii=i+1;ii<=24;ii++){
			c0++;
			if(ii===24){
				for(let k=1;k<=f;k++){
					c0++;
				}
			}
		}
	console.log('O JOGO DUROU %s HORA(S)',c0);
	}
}
else if(i>=13 && f<=24){
	for(var jj=i+1;jj<=24;jj++){
		c0++;
		if(jj===24 && f<=12){
			for(let k=1;k<=f;k++){
				c0++;
			}
		}
	}
	console.log('O JOGO DUROU %s HORA(S)',c0);
}







