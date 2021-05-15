var jsonObj;


function loadJSONDoc(){


var url ="https://api.covid19api.com/summary";

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET",url,true);
xmlhttp.send();

// Ajetaan kun vastaus saadaan
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    // Muutetaan raakadata JSON muotoon

    document.getElementById("data").innerHTML = xmlhttp.responseText;

jsonObj = JSON.parse(xmlhttp.responseText);

    var data = JSON.parse( xmlhttp.responseText );
    //

   

    printJSONTable(jsonObj);

    function printJSONTable(jsonObj){

        var data = jsonObj;
        var out = "<table>";
        out += '<tr>';
        out += '<td>' + "<strong>Maa</strong>" + '<td>';
        out += '<td>' + "<strong>Vahvistettuja</strong>" + '<td>';
        out += '<td>' + "<strong>Parantunteita</strong>" + '<td>';
        out += '<td>' + "<strong>Kuolleita</strong>" + '<td>'; 
        out += '</tr>';
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


        out+="</table>";

         console.log ( data.Countries );

        for (let i=0; i < data.Countries.length;  i++){
              console.log ( data.Countries[i].Country );
        }
}
}
}
}