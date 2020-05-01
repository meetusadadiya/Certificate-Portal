function formvalidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var error;
  alert("email");
    if(name.length==0){
      error = "Please enter your Name.";
      alert(error);
      return false;
    }
    if(email.indexof("@")==-1){
      error="Please enter valid Email";
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
