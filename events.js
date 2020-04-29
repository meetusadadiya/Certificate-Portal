function paraclicked() {
  document.getElementsByClassName("name").setAttribute("style"."color:red");
}
document.getElementsByClassName("name").addEventListener("click",paraclicked());
