/*jsmain.js */

var jsonObj;


function loadJSONDoc() {

var url = "https://api.covid19api.com/summary";

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		document.getElementById("content").innerHTML = xmlhttp.responseText;

jsonObj = JSON.parse(xmlhttp.responseText);

console.log(jsonObj);

printJSONTable(jsonObj);

function printJSONTable(jsonObj) {

	var data = jsonObj;
	var out = "<table>";

        out += '<tr>';
        out += '<td>' + "<strong>Maa</strong>" + '<td>';
        out += '<td>' + "<strong>Vahvistettuja</strong>" + '<td>';
        out += '<td>' + "<strong>Parantunteita</strong>" + '<td>';
        out += '<td>' + "<strong>Kuolleita</strong>" + '<td>'; 
		out += '<tr>';
		out += '<td>' + data.Countries[58].Country + '<td>';
        out += '<td>' + data.Countries[58].TotalConfirmed + '<td>';
        out += '<td>' + data.Countries[58].TotalRecovered + '<td>';
        out += '<td>' + data.Countries[58].TotalDeaths + '<td>'; 
        out += '</tr>';
        out += '<tr>';
        out += '<td>' + data.Countries[55].Country + '<td>';
        out += '<td>' + data.Countries[55].TotalConfirmed + '<td>';
        out += '<td>' + data.Countries[55].TotalRecovered + '<td>';
        out += '<td>' + data.Countries[55].TotalDeaths + '<td>';
		out += '</tr>';
        out += '<tr>';
        out += '<td>' + data.Countries[165].Country + '<td>';
        out += '<td>' + data.Countries[165].TotalConfirmed + '<td>';
        out += '<td>' + data.Countries[165].TotalRecovered + '<td>';
        out += '<td>' + data.Countries[165].TotalDeaths + '<td>';
		out += '</tr>';
        out += '<tr>';
		out += '<td>' + data.Countries[140].Country + '<td>';
        out += '<td>' + data.Countries[140].TotalConfirmed + '<td>';
        out += '<td>' + data.Countries[140].TotalRecovered + '<td>';
        out += '<td>' + data.Countries[140].TotalDeaths + '<td>'; 
        out += '</tr>';
        out += '<tr>';
		out += '<td>' + data.Countries[76].Country + '<td>';
        out += '<td>' + data.Countries[76].TotalConfirmed + '<td>';
        out += '<td>' + data.Countries[76].TotalRecovered + '<td>';
        out += '<td>' + data.Countries[76].TotalDeaths + '<td>'; 
        out += '</tr>';

	out+="</table>";

	document.getElementById("tabledata").innerHTML = out;
}
}
}
}
