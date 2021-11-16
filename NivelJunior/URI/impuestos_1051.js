var s = parseFloat(prompt());

if(s>0){
	if(s>=0 && s<=2000){
		console.log('Isento');
	}
	else if(s>4500){
		let i = (28*(s-4500)/100);
		let r = (s-(i*100)/28);
		if(r>3000 && r<=4500){
			let j = (18*(r-3000)/100);
			let rr = ((s-(j*100)/18)-((i*100)/28));
			if(rr>2000 && rr<=3000){
				let u = (8*(rr-2000)/100);
				console.log(u+j+i);
			}
		}

	}else{
		let i = 0;
		if(s>2000 && s<=4500){
			let j = (18*(s-3000)/100);
			let rr = ((s-(j*100)/18)-((i*100)/28));
			if(rr>2000 && rr<=3000){
				let u = (8*(rr-2000)/100);
				console.log(u+j+i);
			}
		}
	}
}else{

}

