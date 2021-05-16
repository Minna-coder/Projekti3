/*globaali.js */


var jsonObj;


function loadJSONDoc() {

var url = "https://api.covid19api.com/summary";

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		document.getElementById("globaali").innerHTML = xmlhttp.responseText;

jsonObj = JSON.parse(xmlhttp.responseText);

console.log(jsonObj);

printJSONTable(jsonObj);

function printJSONTable(jsonObj) {

	var data = jsonObj;
	var out = "<table>";

    out += '<tr>';
    out += '<td>' + "<strong>Uudet vahvistetut</strong>" + '<td>';
    out += '<td>' + "<strong>Kaikki vahvistetut</strong>" + '<td>';
    out += '<td>' + "<strong>Uudet kuolemantapaukset</strong>" + '<td>';
    out += '<td>' + "<strong>Uudet parantuneet</strong>" + '<td>'; 
    out += '<td>' + "<strong>Päivämäärä</strong>" + '<td>'; 
    out += '<tr>';
    out += '<td>' + data.Clobal.NewConfirmed + '<td>';
    out += '<td>' + data.Clobal.TotalConfirmed + '<td>';
    out += '<td>' + data.Countries.NewDeaths + '<td>';
    out += '<td>' + data.Countries.NewRecovered + '<td>'; 
    out += '<td>' + data.Countries.Date + '<td>';
    out += '</tr>';
    
    out+="</table>";

	document.getElementById("globaali").innerHTML = out;
}
}
}
}
