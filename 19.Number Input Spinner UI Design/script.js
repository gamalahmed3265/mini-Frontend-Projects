let next=document.querySelector(".content #next"),
    prev=document.querySelector(".content #prev"),
    conter=document.querySelector(".content h2");
let conterVerible=0;

function conterFun(cont){
  if(cont<0){
    cont=0;
  }
  if(cont>100){
    cont=100;
  }
  return cont;
}
next.addEventListener("click",(e)=>{
  conterVerible++;
  conterVerible=conterFun(conterVerible);
  conter.innerText=conterVerible;
});
prev.addEventListener("click",(e)=>{
  conterVerible--;
  conterVerible=conterFun(conterVerible);
  conter.innerText=conterVerible;
});
