/**
 * Filename  - scriptHome.php
 * File path - C:\xampp\htdocs\Project\Repository\
 * Description : Validates Login credentials and sends it to server
 * @author  : Alokik Pathak
 * Created date : 18/07/2018
 */



/**
 * Alternate of $(document).ready(function(){});
 * Executed after all DOM elements are loaded and Document is ready
 */
$(function(){
	
	/** Error flag for Email and Password Fields **/
	var errorEmail =true;
	var errorPassword = true;
	var errorFirstName = true;
	var errorLastName = true;
	var errorMobile = true;
	var errorEmailUpdate = true;

	/** Storing id's of various form element **/
	var idEmail = $("#email");
	var idPassword= $("#password");
	var idSubmit = $("#login");
	var idEmailError = $("#email_error_message");
	var idPasswordError = $("#password_error_message");

	var idFirstNameError = $("#fname_error_message");
	var idLastNameError = $("#lname_error_message");
	var idMobileError = $("#mobile_error_message");
	var idAddressError = $("#address_error_message");
	var idUpdateEmailError = $("#update_email_error_message");

	var idResponse = $("#responseHead");
	var idHeadingUpdate = $("#HeadingA");
	var idHeadingAfterUpdate = $("#HeadingB");

	var idUpdateForm = $("#updateRecord");
	var idLoginForm = $("#loginForm");
	var idAfterUpdateForm = $("#afterUpdateForm");
	var idLogoutButton = $("#logoutButton");
	var key="";
	var pswrdUpdate="";

	var idFirstName = $("#fname");
	var idLastName = $("#lname");
	var idEmailUpdate = $("#emailUpdate");
	var idMobile = $("#mobile");
	var idAddress = $("#address");
	var idDepartment = $("#department");
	
	
	/** Hides the Error Messages when the form is ready **/
	idEmailError.hide();
	idPasswordError.hide();
	
	idUpdateForm.hide();
	idAfterUpdateForm.hide();
	idLogoutButton.hide();
	
	/** Changes background-color ro yellow of input field when it is in focus **/
	$("input[type=text], input[type=password]").focus(function(){
		$(this).css("background-color","#ffffcc");
	});
	
	/** Changes background-color to white of input field when it is blur **/
	$("input[type=text], input[type=password] ").blur(function(){
		$(this).css("background-color","#ffffff")
	});
	
	/** Changes background-color to white of input field when it is keydown **/
	$("input[type=text], input[type=password]").keydown(function(){
		$(this).css("background-color","#ffffff")
	});
	
	/** Changes background-color to yellow of input field when it is keyup **/
	$("input[type=text], input[type=password] ").keyup(function(){
		$(this).css("background-color","#ffffcc")
	});
	
	/** Assign validateEmail() method to email input field for keyup event **/
	idEmail.keyup(function(){
		validateEmail();
	});
	
	/** Assign validatePassword() to password input field for keyup event **/
	idPassword.keyup(function(){
		validatePassword();
	});
	
	/** Assign validateFirstName() to FirstName input field **/
	idFirstName.keyup(function(){
		validateFirstName();
	});

	/** Assign validateLastName() to Last Name input field **/
	idLastName.keyup(function(){
		validateLastName();
	});
	
	/** Assign validateEmailUpdate() to Email input field **/
	idEmailUpdate.keyup(function(){
		validateEmailUpdate();
	});
	
	/** Assign validateMobile() to Mobile input field **/
	idMobile.keyup(function(){
		validateMobile();
	});
		
	
	/**
	 * Validates Email data and check for duplicates.
   	 * Set errorEmail value as false for valid data else true.
	 */
	function validateEmail()
	{
		var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var email = $("#email").val();
		
		if(pattern.test(email) && email !== '') {
			
			errorEmail = false;
			idEmailError.hide();
		}else{
		
			idEmailError.html("Invalid email");
			errorEmail = true;
			idEmailError.show();
		}
	}

	
	/**
	 * Validates Password field.
   	 * Set errorPassword value as false for valid data else true.
	 */
	function validatePassword(){
	
		if(idPassword.val().length < 8 ){
			errorPassword = true;
			idPasswordError.html("Password must be >=8 chars");
			idPasswordError.show();
		}else{
			errorPassword = false;
			idPasswordError.hide();
		}
	}
	
   /**
	* Validate First Name field in Registration form,
	* Sets the errorFirstName as false if valid else true.
	*
	*/
	function validateFirstName() {
		
		var pattern = /^[a-zA-Z]*$/;
		var fname = idFirstName.val();
		if (pattern.test(fname) && fname !== '') {
			idFirstNameError.hide();
			errorFirstName = false; 
			idFirstName.css("color","Dodgerblue");
		}
		else {
			idFirstNameError.html("Should contain only alphabets");
			idFirstNameError.show();
			errorFirstName = true; 
			idFirstName.css("color","tomato");

		}
	}
	
	
   /**
	* Validate Last Name field in Registration form,
	* Sets the errorLastName as false if valid else true.
	*
	*/
	function validateLastName() {
		
		var pattern = /^[a-zA-Z]*$/;
		var lname = idLastName.val();
		
		if(lname == ""){
			idLastNameError.hide();
			errorLastName = false; 
			idLastName.css("color","Dodgerblue");
		}
		else if (pattern.test(lname)) {
			idLastNameError.hide();
			errorLastName = false; 
			idLastName.css("color","Dodgerblue");
			
		}
		else {
			idLastNameError.html("Should contain only alphabets");
			idLastNameError.show();
			errorLastName = true; 
			idLastName.css("color","tomato");

		}
	}
	
	/**
	 * Validates Mobile data and check for duplicates.
   	 * Set errorMobile value as false for valid data else true.
	 *
	 */
	function validateMobile(){
		var mob = idMobile.val();
		var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
		if( pattern.test(mob) ){ 
				idMobileError.hide();
				errorMobile = false;
				idMobile.css("color","Dodgerblue");
		}
		else{
			idMobileError.html("Mobile must contain 10 digit numeric value");
			idMobileError.show();
			errorMobile = true;
			idMobile.css("color","tomato");
		}
	}
	
	/**
	 * Validates Email data and check for duplicates.
   	 * Set errorEmail value as false for valid data else true.
	 *
	 */
	function validateEmailUpdate()
	{
		var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var email = idEmailUpdate.val();
		
		if(pattern.test(email) && email !== '') {
			
			errorEmailUpdate = false;
			idUpdateEmailError.hide();
		}else{
		
			idUpdateEmailError.html("Invalid email");
			errorEmailUpdate = true;
			idUpdateEmailError.show();
		}
	}
	
    /**
	 * It fetches & validates login and password field data,
	 * then auhthenticate them form the server database
	 */
	idSubmit.click(function(){
	
		var email = idEmail.val();
		var pswrd = idPassword.val();
		pswrdUpdate = pswrd;
		var hashKeyPswrd = CryptoJS.MD5(pswrd);
		hashKeyPswrd = hashKeyPswrd.toString();
	
		if( errorEmail || errorPassword ){
			alert("Please fill the form correctly first!");
		}else{
			authenticateUserCredentials(email, hashKeyPswrd);
		}
	});
	
	
   /** 
    * Authenticate the user's login credentials form the server side database 
	*
	* @param string email contains the email data of user
	* @parem string pswrd contains the pswrd data of user
    */
	function authenticateUserCredentials(email, pswrd){
		
		var token= $("#tokenId").val();
		var formDataObj = {'token':token, 'Email':email, 'Password':pswrd};
		var formDataObjJSON = JSON.stringify(formDataObj);
	
	
		$.ajax({
		
			type: "POST",
			url: "authenticateHome.php",
			data: 'data='+formDataObjJSON,
			success: function(data){
				alert("Server Response Login: "+data);
				var responseObj = JSON.parse(data);
			    var  responseCode = responseObj.code;
				showServerResponse(responseCode, responseObj.firstName, responseObj.lastName,
				responseObj.email, responseObj.mobile, responseObj.address, responseObj.department);
				
			}
		});
	}
	
	/**
	 * Update the record of Logged in User.
     *
	 */
	$("#updateButton").click(function(){
		
		pswrdEncrypted = CryptoJS.MD5(pswrdUpdate);
		pswrdEncrypted= pswrdEncrypted.toString();
	
		var statusValidation = validateUpdateUser();
		if( !statusValidation){
			runPHPScript(2, idFirstName.val(), idLastName.val(), idEmailUpdate.val(), idMobile.val(), idAddress.val(), idDepartment.val(), pswrdEncrypted);
			key = idEmailUpdate.val();
			
			idHeadingAfterUpdate.html("Welcome "+idFirstName.val()+" "+idLastName.val());
			idHeadingUpdate.html("Welcome "+idFirstName.val()+" "+idLastName.val());
			
			resetAfterUpdate();
		}
		else{
			alert("Please fill the form correctly !");
		}
	});
	
	
	/**
	 * Update the record of Logged in User.
     *
	 */
	$("#updateDetailsAgain").click(function(){
		
		idUpdateForm.show();
		idAfterUpdateForm.hide();
		
	});
	
	/**
	 * Validates Email data and check for duplicates.
   	 * @return boolean true when any data is invalid else false
	 */
	function validateUpdateUser(){
		
		if( errorFirstName || errorLastName || errorEmailUpdate || errorMobile ){
			return true;
		}
		return false;
	}

	
	/**
	 * Displays the Update data Form to Logged In user
	 *	
     */
	function updateRecord(firstName, lastName, email, mobile, address, department){
		
		idUpdateForm.show();
		
		idFirstName.val(firstName);
		idLastName.val(lastName);
		idEmailUpdate.val(email);
		idMobile.val(mobile);
		idAddress.val(address);
		idDepartment.val(department);
		key = email;
		
		idLoginForm.hide();
		
		errorFirstName = errorLastName = errorEmailUpdate = errorMobile = false;
			
	}
	
	
	/**
	 * Show the server response of authentication details
	 *	
     */
	function showServerResponse(responseCode, firstName, lastName, email, mobile, address, department){
		
		if(responseCode == 200){
			idResponse.html("Welcome "+firstName+" "+lastName+" !");
			idHeadingUpdate.html("Welcome "+firstName+" "+lastName+"  !");
			idResponse.css("color","Dodgerblue");
			idHeadingUpdate.css("color","Dodgerblue");
			idEmail.val("");
			idPassword.val("");
			idLogoutButton.show();
			
			updateRecord( firstName, lastName, email, mobile, address, department );
			
		}else{
			idResponse.html("Invalid credentials...!");
			idResponse.css("color","red");
		}
	}
	
	
   /**
	* Performs the SQL operations on server MYsql database.
	* 
	* @param integer operationCode stores the value of different operations
	* @param string firstName stores the First Name data
	* @param string lastName stores the Last Name data
	* @param string email stores the Email data
	* @param string mobile stores the Last Name data
	* @param string address stores the Address data
	* @param string department stores the Department data
	* @param string pswrd stores the Password data
	*/
	function runPHPScript(operationCode, firstName, lastName, email, mobile, address, department, pswrd){
		
		var token= $("#tokenId").val();
		var formDataObj= {'token':token, 'operation':operationCode, 'keyValue':key,
		'firstName':firstName, 'lastName':lastName, 'email':email, 'mobile':mobile,
		'address':address,'department':department, 'password':pswrd};
		
		var formDataJSON = JSON.stringify(formDataObj);
		var responseObj;
		
		$.ajax
		({
			type: "POST",
			url: "authenticateRegister.php",
			data: 'data='+formDataJSON,
			success: function(data)
			{
				alert("Server Response Reg : "+data);
				responseObj = JSON.parse(data);
				var responseCode = responseObj.code;
			}
		});
		
	}

	
	/**
	 * Reset the Login Page 
	 *	
     */
	function resetAfterUpdate(){
		
		idUpdateForm.hide();
		idLoginForm.hide();
		idAfterUpdateForm.show();
		
	}

	
});

	
  
	
	
	
	