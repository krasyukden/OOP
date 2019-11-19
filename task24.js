
//"use strict"; !!! строг режим Відает ошибку і--
function CreateMp3(currentTrack, currentVolume){
   	
	this.currentTrack = currentTrack;
	this.currentVolume = currentVolume;
	
	
	this.nextTrack = function(){
		var i = this.currentTrack;
		i++;
		console.log(i);
		
	};
	this.previousTrack = function(){
		var i = this.currentTrack,
		i--,
		console.log(i);
	};
	this.selectTrack = function(){
		this.currentTrack = Number(prompt("Введите № канала", "" ))
		console.log("Канал №:" + this.currentTrack);
	};
	
	this.selectVolume = function(){
		this.currentVolume = Number(prompt("Введите уров. громкости", "" ));
		console.log("Громкость:" + this.currentVolume);
	};
}

var mp3 = new CreateMp3(2, 5);
console.log(mp3.currentTrack);
console.log(mp3.currentVolume);
mp3.nextTrack();
mp3.previousTrack();
mp3.selectTrack();
mp3.selectVolume();





