window.onload = function () { 
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();

	today = month + "." + day + "." + year;
	document.getElementById("currentDate").innerHTML = "Today is " + today;
}