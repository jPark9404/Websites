// Alert!
function welcome() {
    alert('Welcome!');
}


//Display message for Gallons
function messageGallons() {
    var messageBox = document.getElementById('message1');
    messageBox.textContent = "Please enter Gallons";
}
function removeGallon() {
    var messageBox = document.getElementById('message1');
    messageBox.textContent = "";
}

// Display message for Litres
function messageLitres(){
    var messageBox = document.getElementById('message2');
    messageBox.textContent = "Please enter Litres";
}
function removeLitres(){
    var messageBox = document.getElementById('message2');
    messageBox.textContent = "";
}

// Display message for Feet

function messageFeet(){
    var messageBox = document.getElementById('message3');
    messageBox.textContent = "Please enter Feet"
}

function removeFeet(){
    var messageBox = document.getElementById('message3');
    messageBox.textContent = ""
}

// Display message for Metres

function messageMetres(){
    var messageBox = document.getElementById('message4');
    messageBox.textContent = "Please enter Feet"
}
function removeMetres(){
    var messageBox = document.getElementById('message4');
    messageBox.textContent = "";
}

// Display message for Square Metres and Feet

function sqMetres() {
    var messageBox = document.getElementById('message5');
    messageBox.textContent = "Please enter Square Metres";
}

function removeSqMetres() {
    var messageBox = document.getElementById('message5');
    messageBox.textContent = "";
}
function sqFeet() {
    var messageBox = document.getElementById('message6');
    messageBox.textContent = "Please enter Square Feet";
}

function removeSqFeet() {
    var messageBox = document.getElementById('message6');
    messageBox.textContent = "";
}



///////////////////////////////////////////////////////////





// Calculating Gallons to litres
function GallonsToLitres() {
    var inputPrice = document.getElementById('Gallons').value;
    if (parseInt(inputPrice)) {
        var Litres = parseInt(inputPrice) * 4.54;
        document.getElementById('Litres').value = Litres.toFixed(2);
    }
}
// Calculating Litres to Gallons
function LitresToGallos() {
    var inputPrice = document.getElementById('Litres').value;
    if (parseInt(inputPrice)) {
        var Gallons = parseInt(inputPrice) / 4.54;
        document.getElementById('Gallons').value = Gallons.toFixed(2);
    }
}
// Calculating Feet to Metres
function FeetToMetres() {
    var inputPrice = document.getElementById('Feet').value;
    if (parseInt(inputPrice)) {
        var Metres = parseInt(inputPrice) * 0.3048;
        document.getElementById('Metres').value = Metres.toFixed(2);
    }
}

// Calculating Metres to Feet
function MetresToFeet() {
    var inputPrice = document.getElementById('Metres').value;
    if (parseInt(inputPrice)) {
        var Feet = parseInt(inputPrice) / 0.3048;
        document.getElementById('Feet').value = Metres.toFixed(2);
    }
}

// Calculating SquareMetres to SquareFeet
function SqMetresToFeet() {
    var inputPrice = document.getElementById('SquareMetres').value;
    if (parseInt(inputPrice)) {
        var SquareFeet = parseInt(inputPrice) * 10.7639;
        document.getElementById('SquareFeet').value = SquareFeet.toFixed(2);
    }
}
function sqFeetToMetres() {
    var inputPrice = document.getElementById('SquareFeet').value;
    if (parseInt(inputPrice)) {
        var SquareMetres = parseInt(inputPrice) / 10.7639;
        document.getElementById('SquareMetres').value = SquareMetres.toFixed(2);
    }
}

