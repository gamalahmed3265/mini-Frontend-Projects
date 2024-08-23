let boxs=document.querySelectorAll(".box"),
    glow=document.querySelector(".glow");

boxs.forEach((box) => {
  box.addEventListener("dragover",(e)=>{
    e.preventDefault();
  });
  box.addEventListener("drop",()=>{
    box.appendChild(glow);
  })
});
