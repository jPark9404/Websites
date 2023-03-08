var clientList;

// Functions
function loadJSON() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "./data/rentalclients.json", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var rawJsonData = ajax.responseText;
            
            clientList = JSON.parse(rawJsonData);
       
        }
    }
    ajax.send();
}

var search;


function findclientByName() {
    search = document.getElementById('search_name').value;
    var results = "";

    if (search != null && search != "") {
        document.getElementById('search_results').classList.remove('hide2');
        results += "<h2>Client's Name</h2>";
        results += "<tr><th>Last Name, First Name</th></tr>";
        results += '<div class = "cc">';
        clientList.forEach(client =>{
            if (client.last_name.toUpperCase().startsWith(search.toUpperCase())) {
                results += '<tr id = "search_parameter">';
                results += '<td><button onclick="showVehicle();">' +' "'+ client.last_name+ '", ' + client.first_name + '</button>' + '</td>';
                results += '</tr>';

            }
            
        })


        document.getElementById('search_results').innerHTML = results;
    }
    document.getElementById('showVehicle').classList.remove('hide');

    
}

function showVehicle() {

    document.getElementById('vehicleChoice').classList.remove('hide');
    document.getElementById('showResult').classList.remove('hide');

}

function displayResult() {

    search = document.getElementById('search_name').value;
    var results = "";

    results += '<h2> Registered Client </h2>';
    if (search != null && search != "") {
        results += '<table>';
        results += '<tr><th>Name</th><th>Address</th><th>State_Province</th><th>email</th><th>Phone Number</th></tr>';

        clientList.forEach(client =>{
            if (client.last_name.toUpperCase().startsWith(search.toUpperCase())) {
               
                results += '<tr>';
                results += '<td>' + client.last_name + ' ' + client.first_name + '</td>';
                results += '<td>' + client.address + '</td>';
                results += '<td>' + client.state_prov + '</td>';
                results += '<td>' + client.email + '</td>';
                results += '<td>' + client.phone + '</td>';
                results += '</tr>';
                
            }
        })
        results += '</table>';

       


    }
    document.getElementById('display').innerHTML = results;

    //Validation for veicle

    var results2 = "";


    var choiceVehicle = document.querySelector('.choice input:checked').value;
    var compact = document.getElementById('CompactType').value;
    var mid = document.getElementById('MidType').value;
    var luxury = document.getElementById('LuxuryType').value;
    var vanTruck = document.getElementById('VTType').value;


    var totalPrice = 0;

    var compactPrice = 15;
    var midPrice = 20;
    var luxuryPrice = 35;
    var vanTruckPrice = 40;
    var carPrice = 0;
    var daysOfCar = document.getElementById('days').value;
    if (document.querySelector('.choice input:checked') == null) {
        return;
    }
    ////
    if (choiceVehicle == compact) {
        choiceVehicle = "Compact Car";
        carPrice = compactPrice * daysOfCar;
    } else if (choiceVehicle == mid) {
        choiceVehicle = "Mid-Size Car";
        carPrice = midPrice * daysOfCar;
    } else if (choiceVehicle == luxury) {
        choiceVehicle = "Luxury Car";
        carPrice = luxuryPrice * daysOfCar;
    } else if (choiceVehicle == vanTruck) {
        choiceVehicle = "Van/Truck Car";
        carPrice = vanTruckPrice * daysOfCar;
    }
    totalPrice += carPrice;
    /////////////////

    if (document.querySelectorAll('.choice input:checked') == null) {
		return;
	}

	var addSelectionInput = document.querySelectorAll('.choiceExtra input:checked');
	var adding = [
		["Roof Rack or Bicycle Rack", 5 * daysOfCar],
		["GPS", 10],
		["Child Seat(free)", 0],
	];

    results2 += '<h2> Rental car Receipt </h2>';
    results2 += '<p>' + 'Car type: ' + choiceVehicle+' '+ ' || Rental: ' + daysOfCar+'days ' + ' || Price: $'+ carPrice +'</p>';

    for (let i = 0; i < addSelectionInput.length; i++) {
		var thisSelect = addSelectionInput[i];
		var thisIndex = thisSelect.value;
		var thisAdding = adding[thisIndex];
		var AddingName = thisAdding[0];
		var AddingPrice = adding[thisIndex][1];
		if (AddingName == "Roof Rack or Bicycle Rack") {
			totalPrice += AddingPrice;
			results2 += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "GPS") {
			totalPrice += AddingPrice;
			results2 += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Child Seat(free)") {
			totalPrice += AddingPrice;
			results2 += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
	}
	results2 += '<p>' + '<b>Total Price: $' + totalPrice.toFixed(2) + '</b>' + '</p>' + '<br>';
    //////////

   
    


    document.getElementById('display2').innerHTML = results2;
}