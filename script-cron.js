"use strict"
const stopBtn=document.getElementById('stop');
const startBtn=document.getElementById('start');
const retartBtn=document.getElementById('restart');

let min=0;
let seg=0;
let hs=0;

let cron;
let tempo=1000;

function timer(){
	seg++;
	if(seg==60){
		seg=0;
		min++;

		if(min==60){
		min=0;
		hs++;
	}

}

	

	let format= (hs < 10 ? '0' + hs : hs) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);

	console.log(format);
	
	document.getElementById('counter').innerText= format;

	return format;
}

function start(){
	cron=setInterval(()=>{timer();},tempo);
}

stopBtn.addEventListener('click', function(){
	clearInterval(cron);
})

restart.addEventListener('click', function(){
	cron=setInterval(()=>{timer();},tempo);
	min=0;
	seg=0;
	hs=0;
	document.getElementById('counter')='00:00:00';
})