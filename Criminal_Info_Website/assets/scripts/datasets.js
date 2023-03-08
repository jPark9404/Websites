// Function for choosing search type
var crimeData;

function loadData() {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			crimeData = JSON.parse(ajax.responseText);
		}
	}
	ajax.send();
}

function crimeSearch() {

	document.getElementById('search_results').classList.remove('hide');

	var searchParameter = document.getElementById('search_parameter').value;
	var search = document.getElementById('search').value;
	var results = "";

	if (search != null && search != "") {
        results += '<h2>Crime Record</h2>';
		results += '<tr><th>Area</th><th>Community Name</th><th>Crime Category</th><th>Date</th><th>Year</th><th>Month</th><th>Location</th></tr>';

		crimeData.forEach(crimeSign => {

			if (crimeSign[searchParameter] != undefined && crimeSign[searchParameter].toUpperCase().startsWith(search.toUpperCase())) {

				results += '<tr>';
				results += '<td>' + '<b>'+crimeSign.sector+'</b>' + '</td>';
				results += '<td>' + '<b>'+crimeSign.community_name+'</b>' + '</td>';
				results += '<td>' + '<b>'+crimeSign.category+'</b>' + '</td>';
				results += '<td>' + '<b>'+crimeSign.date+'</b>' + '</td>';
				results += '<td>' + '<b>'+crimeSign.year+'</b>' + '</td>';
				results += '<td>' + '<b>'+crimeSign.month+'</b>' + '</td>';
                results += '<td>' + '<b>'+crimeSign.geocoded_column.latitude +' / '+ crimeSign.geocoded_column.longitude+'</b>' + '</td>';
				results += '<td>' + '<b><a href="https://www.google.com/maps/search/?api=1&query='+crimeSign.geocoded_column.latitude+','+crimeSign.geocoded_column.longitude+'">Map Link</a></b>' + '</td>';
				results += '</tr>';

			} 
		}); 
	} 
	document.getElementById('search_results').innerHTML = results;
}
