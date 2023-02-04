
document.addEventListener("click",(e)=>{
  var body=document.querySelector("body"),
      span=document.createElement("span"),
      audio=document.querySelector("audio"),
      x=e.offsetX;
      y=e.offsetY;

      body.appendChild(span);
      span.style.top=y+"px";
      span.style.left=x+"px";

      audio.play();
});