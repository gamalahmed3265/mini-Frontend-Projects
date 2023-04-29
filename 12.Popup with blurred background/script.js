let btnOpen=document.querySelector(".container .btn"),
    btnClose=document.querySelector(".pop .btn"),
    pop=document.querySelector(".pop"),
    container=document.querySelector(".container");

btnOpen.addEventListener("click",(e)=>{
  pop.classList.toggle("active");
  container.classList.toggle("blur");
});

btnClose.addEventListener("click",(e)=>{
  pop.classList.toggle("active");
  container.classList.toggle("blur");
});
