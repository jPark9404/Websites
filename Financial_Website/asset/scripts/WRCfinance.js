var clientList = [];

function add() {
    
    //client List
    var client = {
        'date': document.getElementById('dateTime').value,
        'fname': document.getElementById('c_fname').value,
        'lname': document.getElementById('c_lname').value,
        'address': document.getElementById('c_address').value,
        'postalCode': document.getElementById('c_postalCode').value,
        'phone': document.getElementById('c_number').value,
        'email': document.getElementById('c_email').value,
        'age': document.getElementById('c_age').value,
        'income': document.getElementById('c_income').value,
    };

    
    
    // client phone information
    if (document.querySelector('.phone_type input:checked') == null) {
        return;
    }
    var phoneType = document.querySelector('.phone_type input:checked').value;
    var businessPhone = document.getElementById('business_phone').value;
    var personalPhone = document.getElementById('personal_phone').value;
    
    if (phoneType == businessPhone) {
        phoneType = "Business";
    } else if (phoneType == personalPhone) {
        phoneType = "Personal";
    }
    var phoneValue = [];
    phoneValue.push(phoneType);
    client.PhoneType = phoneValue;


    //Check status of client current/or not
    var statusInput = document.querySelector('.status_type input:checked').value;
    var statusType;

    switch (statusInput) {
        case "Y":
            statusType = 'Yes';
            break;
        case "N":
            statusType = 'No';
            break;
        default:
            break;
    }
    
    var statusValue = [];
    statusValue.push(statusType);
    client.Status = statusValue;
    
    //Check Gender
    var genderInput = document.querySelector('.gender_type input:checked').value;
    var genderType;
  
    switch (genderInput) {
        case "M":
            genderType = 'Male';
            break;
        case "F":
            genderType = 'Female';
            break;
        default:
            break;
    }
    var genderValue = [];
    genderValue.push(genderType);
    client.Gender = genderValue;

    //Check own Rent Home
    
    var ownRentHomeInput = document.querySelector('.ORhome input:checked').value;
    var ownRentHome;
    switch (ownRentHomeInput) {
        case "Y":
            ownRentHome = 'Yes';
            break;
        case "N":
            ownRentHome = 'No';
            break;
        default:
            break;
    }
    var ORHomeValue = [];
    ORHomeValue.push(ownRentHome);
    client.ORHome = ORHomeValue;

    //Check Vehicle, RRSP, TFSA, RRIF

    var AssetInput = document.querySelectorAll('.AssetSelection input:checked');
    var AssetValue = [];

    for (let i = 0; i < AssetInput.length; i++) {
        var thisSelectedInvest = AssetInput[i];
        AssetValue.push(thisSelectedInvest.value);
    }


    client.Asset = AssetValue;
    clientList.push(client);
    displayClientList();
}
function displayClientList() {

    var display = '<div><h2>Submission of clients</h2>';
    for (let i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        display += '<p>'+'Date: ' + client.date + '<br>';
        display += 'Name: ' + client.fname + ' ' + client.lname + '<br>';
        display += 'Postal Code: ' + client.postalCode + '<br>';
        display += client.PhoneType + ' Phone: ' + client.phone + ' ' + '<br>';
        display += 'Email: ' + client.email + '</p>';
        display += '<p>--------------</p>'
        display += '<p>' + 'Current Client (Y/N): ' + client.Status + '<br>';
        display += 'Gender: ' + client.Gender + '<br>';
        display += 'Own or Rent Home (Y/N): ' + client.ORHome + '<br>';
        display += 'Age: ' + client.age + '<br>';
        display += 'Annual Gross Income: ' + '$' + client.income + '</p>';
        display += '<p>--------------</p>';
        display += '<p><b>Client owns</b></p>'
        for (let c = 0; c < client.Asset.length; c++) {
            thisAsset = client.Asset[c];
            display += '<p>' + thisAsset + '</p>';
        }
        display += '<br><button onclick="deleteClient(' + i + ')">Delete</button>'
        display += '<h3>-------------------------------</h3>';
    }
    document.getElementById('directory_display').innerHTML = display;
}
function deleteClient(clientIndex) {
    clientList.splice(clientIndex, 1);
    displayClientList();
}

