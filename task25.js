//"use strict"; 
// Не работ !!!
var sum = 0;
function mul() {
   // Ваш код
  
   for(var i in mul){
	   //if(type of arguments [i] == Number){} ???
		sum += arguments [i];  
	
   }
   return sum;
   console.log(arguments [i]);
	console.log(mul.length);
   
   /*return {
   var mulplayay = new Function("number", "return number + number;");
   };*/
   
   
   /*return {
	number: number,
	mulplayay: function(){
		number = number + number;
	}
   };*/
   
   
}
console.log(mul(1, 2, 3)); // 
console.log(mul.length);
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
