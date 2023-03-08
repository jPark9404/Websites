
/* Functions */

function orderCafe(){

	// capturing customer info inputs
	var fullName = document.getElementById('c_fullname').value;
	var phoneNumber = document.getElementById('c_phone').value;
	var pickupDate = document.getElementById('c_pickupDate').value;

	
	// var pickupTime = document.getElementById('c_pickupTime').value;

	// capturing quantity for each items
	var quantityInputs1 = document.getElementById('quantity1').value;
	var quantityInputs2 = document.getElementById('quantity2').value;
	var quantityInputs3 = document.getElementById('quantity3').value;
	var quantityInputs4 = document.getElementById('quantity4').value;
	var quantityInputs5 = document.getElementById('quantity5').value;
	var quantityInputs6 = document.getElementById('quantity6').value;
	var quantityInputs7 = document.getElementById('quantity7').value;
	var quantityInputs8 = document.getElementById('quantity8').value;
	var quantityInputs9 = document.getElementById('quantity9').value;

	

	// validate customer info inputs
	if( fullName == null || fullName == "" ){
		var errorMessage = "<span class='error'>Please enter your full name.</span>";
		document.getElementById('customer_info_error').innerHTML = errorMessage;
		return;
	}

	// Validate Pizza
	if(document.querySelectorAll('.pizza input:checked') == null){
		return;
	}
	var pizzaCheckedInputs = document.querySelectorAll('.pizza input:checked');
	var pizza = [
		["Margherita", 12.00],
		["Quattro Formaggi", 12.50],
		["Capricciosa", 13.00],
	];

    // Validate Sandwich
	if(document.querySelectorAll('.sandwich input:checked') == null){
		return;
	}
	var sandwichCheckedInputs = document.querySelectorAll('.sandwich input:checked');
	var sandwich = [
		["Schinitzel", 8.50],
		["Mixed Grill", 9.50],
		["Big Beef on a Bun", 10.00],
	];
	
	// Validate beverage
	if(document.querySelectorAll('.beverage input:checked') == null){
		return;
	}
	var beverageCheckedInputs = document.querySelectorAll('.beverage input:checked');
	var beverage = [
		["Coffee", 2.00],
		["Latte", 2.50],
		["Soft drink", 1.75],
	];
    
    var totalPrice = 0;

	var invoice = '<div class="invoice"><h2>Invoice</h2>';
	invoice += '<b>Full Name:</b> ' + fullName + '<br>';
	invoice += '<b>Phone Number:</b> ' + phoneNumber + '<br>';
	invoice += '<b>Pickup Date & Time:</b> '+ pickupDate +'<br>';

    invoice += '<h3>Pizza</h3><ul>';
	//loop through all selected pizza inputs
    for( let i = 0; i < pizzaCheckedInputs.length; i++ ){
		var thisSelectedpizza = pizzaCheckedInputs[i];
		var thisIndex = thisSelectedpizza.value;
		var thispizza = pizza[thisIndex];
		var pizzaName = thispizza[0];
		var pizzaPrice = pizza[thisIndex][1];
		if(pizzaName == "Margherita"){
			totalPrice += pizzaPrice * quantityInputs1;
			invoice += '<li>'+ quantityInputs1+ " " +pizzaName+': $'+pizzaPrice.toFixed(2) * quantityInputs1+'</li>';

		}
		else if(pizzaName == "Quattro Formaggi"){
			totalPrice += pizzaPrice * quantityInputs2;
			invoice += '<li>'+ quantityInputs2+ " " +pizzaName+': $'+pizzaPrice.toFixed(2) * quantityInputs2+'</li>';

		}
		else if(pizzaName == "Capricciosa"){
			totalPrice += pizzaPrice * quantityInputs3;
			invoice += '<li>'+ quantityInputs3+ " " +pizzaName+': $'+pizzaPrice.toFixed(2) * quantityInputs3+'</li>';

		}
    }
    invoice += '</ul>'

    invoice += '<h3>Sandwich</h3><ul>';
	//loop through all selected sandwich inputs
	for( let i = 0; i < sandwichCheckedInputs.length; i++ ){
		var thisSelectedSandwich = sandwichCheckedInputs[i];
		var thisIndex = thisSelectedSandwich.value;
		var thisSandwich = sandwich[thisIndex];
		var sandwichName = thisSandwich[0];
		var sandwichPrice = sandwich[thisIndex][1];
		if(sandwichName == "Schinitzel"){
			totalPrice += sandwichPrice * quantityInputs4;
			invoice += '<li>'+ quantityInputs4+ " " +sandwichName+': $'+sandwichPrice.toFixed(2) * quantityInputs4+'</li>';
		}
		else if(sandwichName == "Mixed Grill"){
			totalPrice += sandwichPrice * quantityInputs5;
			invoice += '<li>'+ quantityInputs5+ " " +sandwichName+': $'+sandwichPrice.toFixed(2) * quantityInputs5+'</li>';
		}
		else if(sandwichName == "Big Beef on a Bun"){
			totalPrice += sandwichPrice * quantityInputs6;
			invoice += '<li>'+ quantityInputs6+ " " +sandwichName+': $'+sandwichPrice.toFixed(2) * quantityInputs6+'</li>';
		}
    }
    invoice += '</ul>'

    invoice += '<h3>Beverage</h3><ul>';
    // loop through all selected beverage inputs
    for( let i = 0; i < beverageCheckedInputs.length; i++ ){
		var thisSelectedbeverage = beverageCheckedInputs[i];
		var thisIndex = thisSelectedbeverage.value;
		var thisbeverage = beverage[thisIndex];
		var beverageName = thisbeverage[0];
		var beveragePrice = beverage[thisIndex][1];
		if(beverageName == "Coffee"){
			totalPrice += beveragePrice * quantityInputs7;
			invoice += '<li>'+ quantityInputs7+ " " +beverageName+': $'+beveragePrice.toFixed(2) * quantityInputs7+'</li>';
		}
		else if(beverageName == "Latte"){
			totalPrice += beveragePrice * quantityInputs8;
			invoice += '<li>'+ quantityInputs8+ " " +beverageName+': $'+beveragePrice.toFixed(2) * quantityInputs8+'</li>';
		}
		else if(beverageName == "Soft drink"){
			totalPrice += beveragePrice * quantityInputs9;
			invoice += '<li>'+ quantityInputs9+ " " +beverageName+': $'+beveragePrice.toFixed(2) * quantityInputs9+'</li>';
		}

    }

    invoice += '</ul>'
	invoice += '<b>Total Price: $'+totalPrice.toFixed(2)+'</b>'
    invoice += '</div>';

	document.getElementById('display').innerHTML = invoice;
}
