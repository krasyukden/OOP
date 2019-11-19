// раб не до конца. С ф-цией не работ вообще !!!
/*var salaries = {
   John: 100,
   Bill: 300,
   Mike: 250
};*/


function maxSalaries(){
	return {
	
		var salaries = {
		   Cris: 150,
		   Brain: 600,
		   John: 300,
		   Steve: 400,
		   Bill: 50
		}
	
var sum = 0;
for(var k in salaries){
	for(var i in salaries){
		if (salaries[k] > salaries[k + 1]){
		var tmp = salaries[k];
		salaries[k] = salaries[k + 1];
		salaries[k + 1] = tmp;
		//sum = sum + salaries[k];// 1500 ok 
		}
	}
}

/*for(var k in salaries){
	for(var j in salaries){
	for(var i = 0; i <= Object.keys(salaries).length; i++){
		if (salaries[k] > salaries[k + 1]){
		var tmp = salaries[k];
		salaries[k] = salaries[k + 1];
		salaries[k + 1] = tmp;
		//sum = sum + salaries[k];// 1500 ok 
		}
	}
	}
}*/

var lastElem = salaries[ Object.keys(salaries).sort().pop() ];// ПОКАЗЫВАЕТ ПОСЛЕДНИЙ ОБЪЕКТ
console.log(lastElem);//выдает 400 ??
console.dir(salaries);
	
	};
}
maxSalaries();
//var maxElem = maxSalaries();






//var getMax = salaries[Object.keys(salaries).length-1];// 
//console.log(getMax);
//console.log(tmp);



//var size = Object.keys(salaries).length;// 5 ok Object.keys(obj).length
//var res = sum / size;
//console.log(sum);
//console.log(size);
//console.log(res);


// Макс
/*for(var k in salaries){
	sum = sum + salaries[k];// 1500 ok
   count++;   
   }
 };

}
*/
/*
var size = Object.keys(salaries).length;// 5 ok Object.keys(obj).length
var res = sum / count;
console.log(sum);
console.log(size);
console.log(res);*/
