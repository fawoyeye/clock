

var span = document.querySelector('.digitalDate');
var body = document.querySelector('body');
function time() {
var date = new Date();
var hour = date.getHours();
if(hour>12) {
				hour-=12;}
var minute = date.getMinutes();
var second =date.getSeconds();
if(minute<10){minute =`0${minute}`}
span.innerText =`${hour}:${minute}`;	
	var hourArm = document.querySelector('.hourArm');
var minuteArm = document.querySelector('.minuteArm');
var secondArm = document.querySelector('.secondArm');
var hourValue = `${hour}`*30;
var secondValue = `${second}`*6;
var minuteValue = `${minute}`*6;
hourArm.style.transform=`rotate(${hourValue}deg)`;
minuteArm.style.transform=`rotate(${minuteValue}deg)`;
secondArm.style.transform=`rotate(${secondValue}deg)`;

};
setInterval(time,1000);
var hid = new Audio('clock.mp3');
body.onclick =function () {

				hid.play();
		body.onclick=function () {
					hid.pause();	
		}	
		body.onclick = function () {
					hid.play();
 
	
		}
				
}
body.ondclick =function () {
var hid = new Audio('clock.mp3');
				hid.pause();
}


