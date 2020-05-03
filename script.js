function formvalidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var error;
    if(name.length==0){
      error = "Please enter your Name.";
      alert(error);
      return false;
    }
    if(msg.length==0){
      error="Please enter a Message";
      alert(error);
      return false;
    }
    alert("The form is Submitted Successfully");
    return true;
}
function infovalidation() {
  var formemail = document.getElementById("formemail").value;
  var mobileno = document.getElementById("mobileno").value;
  var errormsg;
    if (formemail.length==0){
      errormsg = "Please enter your email";
      alert(errormsg);
      return false;
    }
    if (mobileno.length!=10) {
      errormsg = "Please enter valid Mobile Number";
      alert(errormsg);
      return false;
    }
    alert("Certificate Generated");
    return true;
}
function eventselectorrow1col1() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/04/FacebookEvent-Cover-04-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
function eventselectorrow1col2() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/04/Untitled-2-01-1.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}function eventselectorrow1col3() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/03/Event_5-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
function eventselectorrow2col1() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/04/Cover-01-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
function eventselectorrow2col2() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/03/Event_12-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
function eventselectorrow2col3() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/03/Event_13-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
function eventselectorrow3col1() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/03/Event_4-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
function eventselectorrow3col2() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/03/Event_7-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
function eventselectorrow3col3() {
  document.getElementById("selectedevent").src="https://ieeeaditsb.com/wp-content/uploads/2020/03/Event_2-scaled.jpg";
  document.getElementById("selectedevent").setAttribute("style","opacity:1");
}
