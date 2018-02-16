function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var y = new Date();
var year = y.getFullYear();
var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
var m = y.getMonth();
var day = addZero(y.getDate());

document.getElementById("currentDate").innerHTML = `${year}-${month[m]}-${day}`;

