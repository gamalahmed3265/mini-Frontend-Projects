let imgbox=document.querySelector(".imbox"),
    span=imgbox=document.querySelector(".imbox span");


window.addEventListener("mousemove",(e)=>{
  span.style.left=`${20+e.clientX}px`;
  span.style.top=`${20+e.clientY}px`;
})
