var TOKEN_KEY = 'jwtToken';


$(document).on('click', "#airline", function(e){
	localStorage.setItem("page", "addAirline");
})

$(document).on('click', "#hotel", function(e){
	localStorage.setItem("page", "addHotel");
})

$(document).on('click', "#rac", function(e){
	localStorage.setItem("page", "addRac");
})

$(document).on('click', "#airlineAdmin", function(e){
	localStorage.setItem("page", "addAirlineAdmin");
})

$(document).on('click', "#hotelAdmin", function(e){
	localStorage.setItem("page", "addHotelAdmin");
})

$(document).on('click', "#racAdmin", function(e){
	localStorage.setItem("page", "addRacAdmin");
})

$(document).on('click', "#logout", function(e){
	removeJwtToken(TOKEN_KEY);
	localStorage.clear();
	window.location.replace("index.html");
})

$(document).ready(function(){
	var page = localStorage.getItem("page");
	if (page == "addAirlineAdmin") {
		generateAirlineAdminForm();
		$.ajax({
	        type: 'GET',
	        url: '/api/airlines',
	        contentType: 'application/json',
	        success: fillAirlines
	    })
	}
	else if (page == "addHotelAdmin") {
		generateHotelAdminForm();
		$.ajax({
	        type: 'GET',
	        url: '/api/hotels',
	        contentType: 'application/json',
	        success: fillHotels
	    })
	}
	else if (page == "addRacAdmin") {
		generateRACAdminForm();
		$.ajax({
	        type: 'GET',
	        url: '/api/racs',
	        contentType: 'application/json',
	        success: fillRACs
	    })
	}
	else if(page == "addHotel"){
		generateHotelForm();
	}
	else if(page == "addAirline"){
		generateAirlineForm();
	}
	else if(page == "addRac"){
		generateRACForm();
	}
})

function generateAirlineForm(){
	var form = '<form id="addAirlineForm">'
        	+'<table id="roomInfo" class="ombre_table">'
        	+'<tr><th><h1>Add informations about airline:</h1></th></tr>'
        	+'<tr><td>Name:</td></tr>'
        	+'<tr><td><input type="text" id="name" required /></td></tr>'
        	+'<tr><td>Address:</td></tr>'
        	+'<tr><td><input type="text" id="adress" required /></td></tr>'
        	+'<tr><td><p>Description:</p></td></tr>'
        	+'<tr><td><textarea id="promo"></textarea></td></tr>'
        	+'<tr><td><input type="submit" value="Add airline"></td></tr>'
        	+'</table>'
        	+'</form>';
	$('#addForm').append(form);
}

function generateHotelForm(){
	var form = '<form id="addHotelForm">'
    	+'<table id="roomInfo" class="ombre_table">'
    	+'<tr><th><h1>Add informations about hotel:</h1></th></tr>'
    	+'<tr><td>Name:</td></tr>'
    	+'<tr><td><input type="text" id="name" required /></td></tr>'
    	+'<tr><td>Address:</td></tr>'
    	+'<tr><td><input type="text" id="adress" required /></td></tr>'
    	+'<tr><td><p>Description:</p></td></tr>'
    	+'<tr><td><textarea id="promo"></textarea></td></tr>'
    	+'<tr><td><input type="submit" value="Add hotel"></td></tr>'
    	+'</table>'
    	+'</form>';
	$('#addForm').append(form);
}

function generateRACForm(){
	var form = '<form id="addRACForm">'
    	+'<table id="roomInfo" class="ombre_table">'
    	+'<tr><th><h1>Add informations about RAC:</h1></th></tr>'
    	+'<tr><td>Name:</td></tr>'
    	+'<tr><td><input type="text" id="name" required /></td></tr>'
    	+'<tr><td>Address:</td></tr>'
    	+'<tr><td><input type="text" id="adress" required /></td></tr>'
    	+'<tr><td><p>Description:</p></td></tr>'
    	+'<tr><td><textarea id="promo"></textarea></td></tr>'
    	+'<tr><td><input type="submit" value="Add Rent-A-Car"></td></tr>'
    	+'</table>'
    	+'</form>';
	$('#addForm').append(form);
}

function generateAirlineAdminForm(){
	var form = '<form id = "addAirlineAdminForm">'
        +'<table id="roomInfo" class="ombre_table">'
        +'<tr><td><h1>Add new airline admin:</h1></td></tr>'
        +'<tr><td>Email:</td></tr>'
        +'<tr><td><input type="text" id="email" required /></td></tr>'
        +'<tr><td>Name:</td></tr>'
        +'<tr><td><input type="text" id="name" required /></td></tr>'
        +'<tr><td><p>Surname:</p></td></tr>'
        +'<tr><td><input type="text" id="surname" required /></td></tr>'
        +'<tr><td>Username:</td></tr>'
        +'<tr><td><input type="text" id="username" required /></td></tr>'
        +'<tr><td>Password:</td></tr>'
        +'<tr><td><input type="password" id="password" required /></td></tr>'
        +'<tr><td>Confirm password:</td></tr>'
        +'<tr><td><input type="password" id="passwordConfirm" required /></td></tr>'
        +'<tr><td>Airline name:</td></tr>'
        +'<tr><td><select id="airlines"></select></td></tr>'
        +'<tr><td><input type="submit" value="Register admin"></td></tr>'
        +'</table>'
        +'</form>';
	$('#addForm').append(form);
}

function generateHotelAdminForm(){
	var form = '<form id = "addHotelAdminForm">'
        +'<table id="roomInfo" class="ombre_table">'
        +'<tr><td><h1>Add new hotel admin:</h1></td></tr>'
        +'<tr><td>Email:</td></tr>'
        +'<tr><td><input type="text" id="email" required /></td></tr>'
        +'<tr><td>Name:</td></tr>'
        +'<tr><td><input type="text" id="name" required /></td></tr>'
        +'<tr><td><p>Surname:</p></td></tr>'
        +'<tr><td><input type="text" id="surname" required /></td></tr>'
        +'<tr><td>Username:</td></tr>'
        +'<tr><td><input type="text" id="username" required /></td></tr>'
        +'<tr><td>Password:</td></tr>'
        +'<tr><td><input type="password" id="password" required /></td></tr>'
        +'<tr><td>Confirm password:</td></tr>'
        +'<tr><td><input type="password" id="passwordConfirm" required /></td></tr>'
        +'<tr><td>Hotel name:</td></tr>'
        +'<tr><td><select id="hotels"></select></td></tr>'
        +'<tr><td><input type="submit" value="Register admin"></td></tr>'
        +'</table>'
        +'</form>';
	$('#addForm').append(form);
}

function generateRACAdminForm(){
	var form = '<form id = "addRACAdminForm">'
        +'<table id="roomInfo" class="ombre_table">'
        +'<tr><td><h1>Add new RAC admin:</h1></td></tr>'
        +'<tr><td>Email:</td></tr>'
        +'<tr><td><input type="text" id="email" required /></td></tr>'
        +'<tr><td>Name:</td></tr>'
        +'<tr><td><input type="text" id="name" required /></td></tr>'
        +'<tr><td><p>Surname:</p></td></tr>'
        +'<tr><td><input type="text" id="surname" required /></td></tr>'
        +'<tr><td>Username:</td></tr>'
        +'<tr><td><input type="text" id="username" required /></td></tr>'
        +'<tr><td>Password:</td></tr>'
        +'<tr><td><input type="password" id="password" required /></td></tr>'
        +'<tr><td>Confirm password:</td></tr>'
        +'<tr><td><input type="password" id="passwordConfirm" required /></td></tr>'
        +'<tr><td>Rent-A-Car name:</td></tr>'
        +'<tr><td><select id="racs"></select></td></tr>'
        +'<tr><td><input type="submit" value="Register admin"></td></tr>'
        +'</table>'
        +'</form>';
	$('#addForm').append(form);
}

function fillHotels(data){
	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
	$.each(list, function(index, airline){
		var opt=$('<option value="'+airline.id+'">'+airline.name+'</option>');
		$('#hotels').append(opt);
	})
}

function fillRACs(data){
	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
	$.each(list, function(index, airline){
		var opt=$('<option value="'+airline.id+'">'+airline.name+'</option>');
		$('#racs').append(opt);
	})
}

function fillAirlines(data){
	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
	$.each(list, function(index, airline){
		var opt=$('<option value="'+airline.id+'">'+airline.name+'</option>');
		$('#airlines').append(opt);
	})
	var li=$('<li><a href="sysAdmin-home" id="logout"><span class="glyphicon glyphicon-log-in"></span> Log in</a></li>');
	$('#menu').append(li);
}

$(document).on('click', "#blockAdmin", function(e){
	var id=$(this).attr("name");
	$.ajax({
        type: 'PUT',
        url: '/api/blockAdmin/'+id,
        contentType: 'text/plain',
        success: function(data){
            var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
            if(data != null){
            	if(data.enabled == false){
            		alert("Admin successfully blocked!");
            	}
            	else{
            		alert("Admin successfully unblocked!");
            	}
            	location.reload();
            }
            else{
            	alert("Admin could not be found.");
            }
        }
    })
})

$(document).on('submit', "#addAirlineAdminForm", function(e){
	e.preventDefault();
	var email = $('#email').val();
	var name = $('#name').val();
	var surname = $('#surname').val();
	var username = $('#username').val();
	var password = $('#password').val();
	var passwordConfirm = $('#passwordConfirm').val();
	var company = $("#airlines :selected").val();
	if(password == "" || password != passwordConfirm){
		alert("Please enter a password and confirm it!");
		return;
	}
	if(password == "" || name == "" || surname == "" || username == ""){
		alert("All fields must be filled!");
		return;
	}
	$.ajax({
        type: 'POST',
        url: '/auth/addAirlineAdmin',
        headers : createAuthorizationTokenHeader(TOKEN_KEY),
        contentType: 'application/json',
		dataType : 'json',
        data:inputToAdmin(email, name, surname, username, password, company),
        success: function(data){
        	$.bootstrapGrowl("Airline admin has been successfully added!", {
				  ele: 'body', // which element to append to
				  type: 'success', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 3000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If false then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
			$.bootstrapGrowl("An error occurred while trying to add airline admin!", {
				  ele: 'body', // which element to append to
				  type: 'danger', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If true then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
		}
    });
})

$(document).on('submit', "#addHotelAdminForm", function(e){
	e.preventDefault();
	var email = $('#email').val();
	var name = $('#name').val();
	var surname = $('#surname').val();
	var username = $('#username').val();
	var password = $('#password').val();
	var passwordConfirm = $('#passwordConfirm').val();
	var company = $("#hotels :selected").val();
	if(password == "" || password != passwordConfirm){
		alert("Please enter a password and confirm it!");
		return;
	}
	if(password == "" || name == "" || surname == "" || username == ""){
		alert("All fields must be filled!");
		return;
	}
	$.ajax({
        type: 'POST',
        url: '/auth/addHotelAdmin',
        headers : createAuthorizationTokenHeader(TOKEN_KEY),
        contentType: 'application/json',
        dataType : 'json',
        data:inputToAdmin(email, name, surname, username, password, company),
        success: function(data){
        	$.bootstrapGrowl("Hotel admin has been successfully added!", {
				  ele: 'body', // which element to append to
				  type: 'success', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 3000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If false then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
            
        },
        
        error : function(XMLHttpRequest, textStatus, errorThrown) {
			$.bootstrapGrowl("An error occurred while trying to add hotel admin!", {
				  ele: 'body', // which element to append to
				  type: 'danger', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If true then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
		}
    });
})

$(document).on('submit', "#addRACAdminForm", function(e){
	e.preventDefault();
	var email = $('#email').val();
	var name = $('#name').val();
	var surname = $('#surname').val();
	var username = $('#username').val();
	var password = $('#password').val();
	var passwordConfirm = $('#passwordConfirm').val();
	var company = $("#racs :selected").val();
	if(password == "" || password != passwordConfirm){
		alert("Please enter a password and confirm it!");
		return;
	}
	if(password == "" || name == "" || surname == "" || username == ""){
		alert("All fields must be filled!");
		return;
	}
	$.ajax({
        type: 'POST',
        url: '/auth/addRACAdmin',
        contentType: 'application/json',
        data:inputToAdmin(email, name, surname, username, password, company),
        success: function(data){
        	$.bootstrapGrowl("Rent a car admin has been successfully added!", {
				  ele: 'body', // which element to append to
				  type: 'success', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 3000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If false then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
			$.bootstrapGrowl("An error occurred while trying to add rent a car admin!", {
				  ele: 'body', // which element to append to
				  type: 'danger', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If true then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
		}
    });
})

$(document).on('submit', "#addAirlineForm", function(e){
	e.preventDefault();
	var name = $('#name').val();
	var address = $('#adress').val();
	var desc = $('#promo').val();
	var image = "images/plane.png";
	if(name == "" || address == "" || desc == "" || image == ""){
		alert("All fields must be filled!");
		return;
	}
	$.ajax({
        type: 'POST',
        url: '/api/airline',
        headers : createAuthorizationTokenHeader(TOKEN_KEY),
        contentType: 'application/json',
        data:inputToCompany(name, address, desc, image),
        success: function(data){
            $.bootstrapGrowl("Airline has been successfully added!", {
				  ele: 'body', // which element to append to
				  type: 'success', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 3000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If false then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
			$.bootstrapGrowl("An error occurred while trying to add airline !", {
				  ele: 'body', // which element to append to
				  type: 'danger', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If true then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
		}
    });
})

$(document).on('submit', "#addRACForm", function(e){
	e.preventDefault();
	var name = $('#name').val();
	var address = $('#adress').val();
	var desc = $('#promo').val();
	var image ="images/rac.png";
	$.ajax({
        type: 'POST',
        url: '/api/rac',
        headers : createAuthorizationTokenHeader(TOKEN_KEY),
        contentType: 'application/json',
        data:inputToCompany(name, address, desc, image),
        success: function(data){
            $.bootstrapGrowl("Rent a car has been successfully added!", {
				  ele: 'body', // which element to append to
				  type: 'success', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 3000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If false then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
			$.bootstrapGrowl("An error occurred while trying to add rent a car !", {
				  ele: 'body', // which element to append to
				  type: 'danger', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If true then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
		}
    });
})

$(document).on('submit', "#addHotelForm", function(e){
	e.preventDefault();
	var name = $('#name').val();
	var address = $('#adress').val();
	var desc = $('#promo').val();
	var image = "images/hotel.png";
	$.ajax({
        type: 'POST',
        url: '/api/hotel',
        headers : createAuthorizationTokenHeader(TOKEN_KEY),
        contentType: 'application/json',
        data:inputToCompany(name, address, desc, image),
        success: function(data){
            $.bootstrapGrowl("Hotel has been successfully added!", {
				  ele: 'body', // which element to append to
				  type: 'success', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 3000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If false then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
			$.bootstrapGrowl("An error occurred while trying to add hotel !", {
				  ele: 'body', // which element to append to
				  type: 'danger', // (null, 'info', 'danger', 'success')
				  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
				  align: 'right', // ('left', 'right', or 'center')
				  width: 'auto', // (integer, or 'auto')
				  delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
				  allow_dismiss: false, // If true then will display a cross to close the popup.
				  stackup_spacing: 10 // spacing between consecutively stacked growls.
				});
		}
    });
})


function inputToCompany(name, adress, desc, image){
	return JSON.stringify({
		"name":name,
		"address":adress,
		"description":desc,
		"image":image,
	})
}

function inputToAdmin(email, name, surname, username, password, company){
	return JSON.stringify({
		"adminId":company,
		"firstName":name,
		"lastName":surname,
		"username":username,
		"password":password,
		"email":email,
	})
}