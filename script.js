function formvalidation() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var msg = document.getElementById('msg').value;
	var error;
	if (name.length == 0) {
		error = 'Please enter your Name.';
		alert(error);
		return false;
	}
	if (msg.length == 0) {
		error = 'Please enter a Message';
		alert(error);
		return false;
	}
	alert('The form is Submitted Successfully');
	return true;
}
function infovalidation() {
	var formemail = document.getElementById('formemail').value;
	var mobileno = document.getElementById('mobileno').value;
	var errormsg;
	if (formemail.length == 0) {
		errormsg = 'Please enter your email';
		alert(errormsg);
		return false;
	}
	if (mobileno.length != 10) {
		errormsg = 'Please enter valid Mobile Number';
		alert(errormsg);
		return false;
	}
	alert('Certificate Generated');
	return true;
}
function selectEvent(selectedImgSrc) {
	document.getElementById('selectedevent').setAttribute('src', selectedImgSrc);
	document.getElementById('selectedevent').setAttribute('style', 'opacity:1');
}
