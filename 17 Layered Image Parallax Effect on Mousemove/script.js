let imgAll=document.querySelectorAll(".container img");
document.addEventListener("mousemove",parallax);

function parallax(e){
  imgAll.forEach((item, i) => {
    var speed=item.getAttribute("data-speed");

    var x=(window.innerWidth-e.pageX *speed)/255;
    var y=(window.innerWidth-e.pageX *speed)/255;
    item.style.transform=`translate(${-x}px) translateY(${y}px)`;
  });


}
