print=(messge)=>console.log(messge);


scrollEventItem=(e)=>{
   var bg=document.querySelector(".bg"),
       value=window.scrollY;

       bg.style.clipPath= `circle(${value}px at center)`;
}

window.addEventListener("scroll",scrollEventItem)