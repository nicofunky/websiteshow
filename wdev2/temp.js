var map = {
     "1": "./pd.html", 
     "2": "./wd1.html",
     "3": "./vc.html", 
     "4": "./photo1.html", 
     "5": "./itdm.html", 
     "6": "./dpp.html", 
     "7": "./wd2.html", 
     "8": "./ud.html", 
     "9": "./stnr.html", 
     "10": "./photo2.html", 
     "11": "./goals.html", 
     "12": "./about.html", 
     "13": "./personal.html",  
}

;

let btn = document.querySelector('button');
let output = document.querySelector('#output');

function getRandomNumber(min, max){
	let step1 = max - min + 1;
	let step2 = Math.random() * step1;
	let result = Math.floor(step2) + min;

	return result;
}

btn.addEventListener('click', () =>{
    let randomNumber = getRandomNumber(1, 13);
    output.innerText = map[randomNumber];
    window.location = map[randomNumber];
})



