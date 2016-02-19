var weeklyRides;
var monthlyCost;


function metroCalc(){
	weeklyRides = document.getElementById("weeklyRides").value;
	monthlyCost = weeklyRides * 4 * 2.75;
	alert("You spend approximately $"+monthlyCost+" per month on the subway.");
	metroCard();

}

function metroCard(){
	if (monthlyCost < 116.50) {
		alert("You should buy a per-ride MetroCard.");
	} else {
		alert("You should buy a monthly MetroCard ($116.50) to save money.");
	}

}