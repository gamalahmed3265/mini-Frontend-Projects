let buttons=document.querySelector(".buttons"),
    span=document.querySelectorAll("span"),
    value=document.querySelector("#value"),
    clear=document.querySelector("#clear"),
    add=document.querySelector("#add"),
    equal=document.querySelector("#equal");


for (let i = 0; i < span.length; i++) {
    span[i].addEventListener("click",function(){
      if(span[i].innerHTML=="="){
        value.innerHTML=eval(value.innerHtml);
      }else{
        if(span[i].innerHTML=="Clear"){
          value.innerHTML="";
        }
        else{
          value.innerHTML+=span[i].innerHTML;
        }
      }
    })
}
