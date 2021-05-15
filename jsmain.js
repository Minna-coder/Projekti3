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
    out += '<td>' + data.Countries[0].Country + '<td>';
    out += '<td>' + data.Countries[0].TotalConfirmed + '<td>';
    out += '<td>' + data.Countries[0].TotalRecovered + '<td>';
    out += '<td>' + data.Countries[0].TotalDeaths + '<td>'; 
    out += '</tr>';
    out += '<tr>';
    out += '<td>' + data.Countries[1].Country + '<td>';
    out += '<td>' + data.Countries[1].TotalConfirmed + '<td>';
    out += '<td>' + data.Countries[1].TotalRecovered + '<td>';
    out += '<td>' + data.Countries[1].TotalDeaths + '<td>'; 
    out += '</tr>';
    out += '<tr>';
    out += '<td>' + data.Countries[2].Country + '<td>';
    out += '<td>' + data.Countries[2].TotalConfirmed + '<td>';
    out += '<td>' + data.Countries[2].TotalRecovered + '<td>';
    out += '<td>' + data.Countries[2].TotalDeaths + '<td>'; 
    out += '</tr>';
    out += '<tr>';
    out += '<td>' + data.Countries[3].Country + '<td>';
    out += '<td>' + data.Countries[3].TotalConfirmed + '<td>';
    out += '<td>' + data.Countries[3].TotalRecovered + '<td>';
    out += '<td>' + data.Countries[3].TotalDeaths + '<td>';
    out += '</tr>';
    out += '<tr>';


 

	out+="</table>";

	document.getElementById("tabledata").innerHTML = out;
}
}
}
}
