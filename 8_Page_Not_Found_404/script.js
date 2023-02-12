print=(messge)=>console.log(messge);


let bg=document.querySelector(".container"),


addEventItem=(e)=>{
   var x=- e.clientX/5,
       y=- e.clientY/5;
   
   bg.style.backgroundPositionX=`${x}px`;
   bg.style.backgroundPositionY=`${y}px`;
}
window.addEventListener("mousemove",addEventItem)