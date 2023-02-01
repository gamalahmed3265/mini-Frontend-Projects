function validation() {
  var text=document.querySelector("#text"),
    email=document.querySelector("#email").value,
    formInput=document.querySelector("#formInput");

  const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern)){
    formInput.classList.add("valid");
    formInput.classList.remove("invalid");
    text.innerHTML="Your Email Address in Valid";
    text.style.color="#00ff00";
  }else{
    formInput.classList.remove("valid");
    formInput.classList.add("invalid");
     text.innerHTML="Please Enter Valid Emails";
    text.style.color="#ff0000";
  }

}