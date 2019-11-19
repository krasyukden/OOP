"use strict";
//без  this использовать а и б ???
var calculator = {
   // Ваш код
   a: 0,
   b: 0,
   read: function() {
	 
	 this.a = +prompt("Введите а", ),  
	 this.b = +prompt("Введите b", )  
     //console.log(this.a), ok    
     //console.log(this.b)  ok   
   },
   sum: function () {
	   //return { ??? почему нельзя
	   return this.a + this.b  
	   //};
	 },
	mul: function(){
		return this.a * this.b
	} 
 }

calculator.read();
//calculator.sum();
console.log(calculator.sum());
console.log(calculator.mul());
