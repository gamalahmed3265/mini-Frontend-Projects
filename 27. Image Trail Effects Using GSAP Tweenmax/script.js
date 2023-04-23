
let imgbox=document.querySelectorAll(".imgbox");
document.addEventListener("mousemove",(e)=>{
  imgbox.forEach((item, i) => {
    item.style.left=`${e.clientX}px`;
    item.style.top=`${e.clientY}px`;
    item.style.transition=`${i/14}s ease-in-out`;
  });

});
