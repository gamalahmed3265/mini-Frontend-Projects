let slide2=document.querySelector(".container .slide2");

document.addEventListener("mousemove",(e)=>{
  slide2.style.left=e.clientX+"px";
});
