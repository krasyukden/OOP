//когда ; когда , ???
//"use strict";
function createMp3(){
  return {	
	currentTrack: 1,
	currentVolume: 5,
	
	
	nextTrack: function(){
		var i = this.currentTrack;
		i++;
		console.log(i);
		
	},
	previousTrack: function(){
		i = this.currentTrack,
		i--,
		console.log(i);
	},
	selectTrack: function(){
		this.currentTrack = Number(prompt("Введите № канала", "" ))
		console.log("Канал №:" + this.currentTrack);
	},
	
	selectVolume: function(){
		this.currentVolume = Number(prompt("Введите уров. громкости", "" ));
		console.log("Громкость:" + this.currentVolume);
	}
   };	
}
var mp3 = createMp3();

console.log(mp3.nextTrack());
console.log(mp3.previousTrack());
mp3.selectTrack();
//console.log(mp3.selectVolume());// ???  не работ
mp3.selectVolume();

/*
var mp3 = {
	
	currentTrack: 1,
	currentVolume: 5,
	
	
	nextTrack: function(){
		var i = this.currentTrack;
		i++;
		console.log(i);
		//return i // ??? почему ошибка
	},
	previousTrack: function(){
		i = this.currentTrack,
		i--,
		console.log(i);
	},
	selectTrack: function(){
		this.currentTrack = Number(prompt("Введите № канала", "" ))
		console.log(this.currentTrack);
	},
	
	selectVolume: function(){
		this.currentVolume = Number(prompt("Введите уров. громкости", "" ));
		console.log(this.currentVolume);
	}
		
}

console.log(mp3.nextTrack());
console.log(mp3.previousTrack());
mp3.selectTrack();
//console.log(mp3.selectVolume());// ???  не работ
mp3.selectVolume();*/