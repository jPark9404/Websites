


/////////////////////////////
//// Function for Ajax //////
/////////////////////////////

function loadContent(){

	var ajax = new XMLHttpRequest();

	ajax.open("GET", "./data/bakeries.html", true);

	ajax.onreadystatechange = function() {
		if( ajax.readyState == 4 && ajax.status == 200 ){
			var rawData = ajax.responseText;
			document.getElementById('content').innerHTML = rawData;
		}
	}
	ajax.send();
}




//////////////////////////////////////////////
//// Function for choosing Cakes between//////
////  Rectangular cake and Round cake   //////
//////////////////////////////////////////////

function chooseCakes() {
	
	var cakeForm = document.getElementById('cakeType_select').value;
	document.getElementById('SheetType').classList.add('hide');
	document.getElementById('RoundType').classList.add('hide');
	document.getElementById('display').innerHTML = "";

	switch (cakeForm) {
		case "Sheet Cake":
			document.getElementById('SheetType').classList.remove('hide');
			break;
		case "Round Cake":
			document.getElementById('RoundType').classList.remove('hide');
			break;
		default:
			break;
	}
}

// Validate client Array List
clientList = [];



//////////////////////////////////////
//// Function for Rectangular Cake////
//////////////////////////////////////

function SheetOrder() {

	// Customer Information
	var client = {
		'fname': document.getElementById('c_fname').value,
		'lname': document.getElementById('c_lname').value,
		'address': document.getElementById('c_address').value,
		'postalCode': document.getElementById('c_postalCode').value,
		'phone': document.getElementById('c_phone').value,
		'email': document.getElementById('c_email').value,
	};

	// Validate Rectangular(Sheet)Cake types
	var rectangularCake = "Rectangular Cake";
	
	var SheetLayer = document.getElementById('scake_layer').value;
	var layer = " layer";
	var layers = " layers";
	var lengthofSheet = document.getElementById('sheet_Length').value;
	var widthofSheet = document.getElementById('sheet_Width').value;
	var minimumSize = 900.00;
	var basePrice = 18.00;
	var extraPrice = 0.02;

	// Validate the price of Sheet Cake with sheetType, Length, and Width
	var firstLayer = (lengthofSheet * widthofSheet);
	var SheetcakePrice = ((firstLayer - minimumSize) * extraPrice) + basePrice;
	var priceOfSheet = SheetcakePrice;


	// Validate the price of Sheet Cake with sheetType, Length, and Width
	if (SheetLayer == 1) {
		priceOfSheet = SheetcakePrice;
		SheetLayer += layer;
	}
	else if (SheetLayer == 2) {
		priceOfSheet = SheetcakePrice + (SheetcakePrice / 2);
		SheetLayer += layers;
	}
	else if (SheetLayer == 3) {
		priceOfSheet = SheetcakePrice * 2;
		SheetLayer += layers;
	}


	// Validate Additional
	if (document.querySelectorAll('.choice input:checked') == null) {
		return;
	}
	var addSelectionInput = document.querySelectorAll('.choice input:checked');
	var adding = [
		["Cream Cheese iciing", 5],
		["Fruit and Almonds topping", 7],
		["Fruit jam filling between layers", 4],
	];

	// Display invoice of submission for Sheet Cake
	var totalPrice = priceOfSheet;
	var invoice = '<h2> Submission </h2>';
	invoice += '<p>' + 'Name: ' + client.fname + " " + client.lname + '</p>';
	invoice += '<p>' + 'Address: ' + client.address + '</p>';
	invoice += '<p>' + 'Postal Code: ' + client.postalCode + '</p>';
	invoice += '<p>' + 'Phone Number: ' + client.phone + '</p>';
	invoice += '<p>' + 'Email: ' + client.email + '</p>';
	invoice += '<h3> Your Order </h3>';
	invoice += '<p>' + rectangularCake + ' ' + '(L)' + lengthofSheet + 'cm ' + '(W)' + widthofSheet + 'cm with ' + SheetLayer + "  $" + priceOfSheet.toFixed(2) + '</p>';

	//loop through all selected Additional inputs
	for (let i = 0; i < addSelectionInput.length; i++) {
		var thisSelecte = addSelectionInput[i];
		var thisIndex = thisSelecte.value;
		var thisAdding = adding[thisIndex];
		var AddingName = thisAdding[0];
		var AddingPrice = adding[thisIndex][1];
		if (AddingName == "Cream Cheese iciing") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit and Almonds topping") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit jam filling between layers") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
	}
	invoice += '<p>' + '<b>Total Price: $' + totalPrice.toFixed(2) + '</b>' + '</p>' + '<br>';
	document.getElementById('display').innerHTML = invoice;

}

////////////////////////////////
//// Function for Round Cake////
////////////////////////////////

function RoundOrder() {

	// Customer Information
	var client = {
		'fname': document.getElementById('c_fname').value,
		'lname': document.getElementById('c_lname').value,
		'address': document.getElementById('c_address').value,
		'postalCode': document.getElementById('c_postalCode').value,
		'phone': document.getElementById('c_phone').value,
		'email': document.getElementById('c_email').value,
	};
	// Validate RoundCakes
	var baseRoundCake = "Round Cake";
	var RoundLayer = document.getElementById('rcake_layer').value;
	var layer = " layer";
	var layers = " layers";
	var radius = document.getElementById('round_size').value;
	var minimumSize = 707;
	var basePrice = 15;
	var extraPrice = 0.02;
	var firstLayer = ((radius * radius) * 3.14);
	var cakePrice = ((firstLayer - minimumSize) * extraPrice) + basePrice;
	var priceOfRound = cakePrice;

	if (RoundLayer == 1) {
		priceOfRound = cakePrice;
		RoundLayer += layer;
	}
	else if (RoundLayer == 2) {
		priceOfRound = cakePrice + (cakePrice / 2);
		RoundLayer += layers;
	}
	else if (RoundLayer == 3) {
		priceOfRound = cakePrice * 2;
		RoundLayer += layers;
	}


	// Validate Additional
	if (document.querySelectorAll('.choice2 input:checked') == null) {
		return;
	}
	var addSelectionInput = document.querySelectorAll('.choice2 input:checked');
	var adding = [
		["Cream Cheese iciing", 5],
		["Fruit and Almonds topping", 7],
		["Fruit jam filling between layers", 4],
	];
	// Display invoice of submission for Round Cake
	var totalPrice = priceOfRound;
	var invoice = '<h2> Submission </h2>';
	invoice += '<p>' + 'Name: ' + client.fname + " " + client.lname + '</p>';
	invoice += '<p>' + 'Address: ' + client.address + '</p>';
	invoice += '<p>' + 'Postal Code: ' + client.postalCode + '</p>';
	invoice += '<p>' + 'Phone Number: ' + client.phone + '</p>';
	invoice += '<p>' + 'Email: ' + client.email + '</p>';
	invoice += '<h3> Your Order </h3>';
	invoice += '<p>' + baseRoundCake + ' ' + radius + 'cm with ' + RoundLayer + "  $" + priceOfRound.toFixed(2) + '</p>';
	
	//loop through all selected additional inputs
	for (let i = 0; i < addSelectionInput.length; i++) {
		var thisSelecte = addSelectionInput[i];
		var thisIndex = thisSelecte.value;
		var thisAdding = adding[thisIndex];
		var AddingName = thisAdding[0];
		var AddingPrice = adding[thisIndex][1];
		if (AddingName == "Cream Cheese iciing") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit and Almonds topping") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit jam filling between layers") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
	}
	invoice += '<p>' + '<b>Total Price: $' + totalPrice.toFixed(2) + '</b>' + '</p>' + '<br>';
	document.getElementById('display').innerHTML = invoice;

}







