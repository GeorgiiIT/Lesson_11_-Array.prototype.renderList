const flowers = ['🪴', '🌷', '🌾', '🌺'];
const animals = [
	{
		name: 'dog',
		icon: '🐶'
	},
	{
		name: 'cat',
		icon: '🐱'
	},
	{
		name: 'hamster',
		icon: '🐹'
	},
	{
		name: 'rabbit',
		icon: '🐰'
	}
];
const capitalize = word => word[0].toUpperCase()+word.slice(1).toLowerCase();
Array.prototype.renderList = function(arr){
	console.log(arr)
	return arr.map((item) =>{
	if(typeof item === `object`){
		let options = [];
		for(let key in item){
			options.push(`${capitalize(key)}: ${item[key]}`);
	  }
	  return  `<li> ${options.join(`. `)+`.`} </li>`;
	} else   {
		return `<li>${item}</li>`	
	}
	}).join(``)
	}
	let flowersRend = [].renderList(flowers);
	let animalsRend = [].renderList(animals);
	document.write(`<ul>${flowersRend}</ul>`
	);
	document.write(`<ul>${animalsRend}</ul>`
	);