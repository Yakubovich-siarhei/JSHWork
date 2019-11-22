//hw_1.1

document.getElementById('button2').onclick = function () {
    document.getElementById('wripper').style.backgroundColor = 'red';
    return false;
}


//HW_1.2
document.getElementById("button").onclick = function () {
	document.location.href = "http://www.google.com";
    return true;
}

//HW_1.3
document.getElementById('button3').onclick = function () {
    document.getElementById("wripper").innerHTML = "";
    document.getElementById("wripper").innerHTML =
        "<div style='display:flex; flex-direction:column; padding:10px 0; margin:auto;'>" +
        "<div style='background-color: #222362; width:50px; height:50px; padding: 20px;'>flex</div>" +
        "<div style='background-color: #363536; width:80px; height:30px; padding: 20px;'>flex</div>" +
        "<div style='background-color: #005636; width:60px; height:70px; padding: 20px;'>flex</div>" +
        "</div>";
        return false;
}

// HW_2
let term = {
    Belarus : -3,
    Russia : 2,
    Ukraine : -5,
    Lithuania : -1,
    Poland : 8,
    Boston : 25
};

function midletem(term){
	var sum = 0;
	var counter = 0;
	var avgValue = 0;

	for(var key in term){   
		sum += term[key];
		counter++;
	}

	avgValue = sum/counter;
	return avgValue.toFixed(2);
}
alert("Средняя температура: " + midletem(term));


// HW_3

function maxTemp(term){
	var maxValue = 0;

	for(var key in term){
		if(term[key] > maxValue){
			maxValue = term[key];
		}
	}
	return maxValue;
}

alert("Максимальная температура: " + maxTemp(term));
