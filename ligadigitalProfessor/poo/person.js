// Abstraction example

// O COMANDO LET DENTRO DE UMA FUNCTION RESTRINGE O CÓDIGO APENAS PARA A FUNCTION (UNDEFINED)
// JÁ O COMANDO THIS DEIXA O CODIGO ACESSIVEL EXTERNAMENTE

function person(fname,lname){
	let firstname = fname;
	let lastname = lname;

	let getDetails_noaccess = function(){
		return (`First name is: ${firstname} Last
			name is: ${lastname}`);
	}

	this.getDetails_access = function(){
		return (`First name is: ${firstname}, Last
			name is: ${lastname}`);
	}
}
let person1 = new person('Anderson','Alves');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());
