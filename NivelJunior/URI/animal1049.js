var input = require('fs').readFileSync('stdin', 'utf8').split('\n');
if(input[0]=="vertebrado"){
	if(input[1]==="ave")
	{
		if(input[2]=="carnivoro"){console.log('aguia');}
		else if(input[2]=="onivoro"){console.log('pomba');}
	}
	else if(input[1]=="mamifero"){
		if(input[2]=="onivoro"){console.log('homem');}
		else if(input[2]=="herbivoro"){console.log('vaca');}
	}
}
else if(input[0]=="invertebrado"){
	if(input[1]=="inseto")
	{
		if(input[2]=="hematofago"){console.log('pulga');}
		else if(input[2]=="herbivoro"){console.log('lagarta');}
	}
	else if(input[1]=="anelideo"){
		if(input[2]=="hematofago"){console.log('sanguessuga');}
		else if(input[2]=="onivoro"){console.log('minhoca');}
	}
}


