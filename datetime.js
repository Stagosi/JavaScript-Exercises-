//get day
  var t = new Date();
  var weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     
  var td = weekday[t.getDay()];
  document.getElementById("dayToday").innerHTML +=td;

//get hours
var dh = new Date();
var dhours = dh.getHours();

// set PM
Date.prototype.myMet = function() {
    if (this.getHours() == 13){this.myProp = "1 PM"};
    if (this.getHours() == 14){this.myProp = "2 PM"};
    if (this.getHours() == 15){this.myProp = "3 PM"};
    if (this.getHours() == 16){this.myProp = "4 PM"};
    if (this.getHours() == 17){this.myProp = "5 PM"};
    if (this.getHours() == 18){this.myProp = "6 PM"};
    if (this.getHours() == 19){this.myProp = "7 PM"};
    if (this.getHours() == 20){this.myProp = "8 PM"};
    if (this.getHours() == 21){this.myProp = "9 PM"};
    if (this.getHours() == 22){this.myProp = "10 PM"};
    if (this.getHours() == 23){this.myProp = "11 PM"};
    };

function myFunction() {
var d = new Date();
d.myMet();
document.getElementById("currentTime").innerHTML += d.myProp + " :";
};

if (dhours <= 12){
  document.getElementById("currentTime").innerHTML += dhours + "AM :";
} else {
  myFunction();
};
//add zero
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//get minutes
var m = new Date();
var min = addZero(m.getMinutes());
document.getElementById("minutes").innerHTML = min + " : ";
//get seconds
var s = new Date();
var sec = addZero(s.getSeconds());
document.getElementById("seconds").innerHTML = sec;



