
let marker=document.querySelector("#marker");

function indicator(e){
  marker.style.left=e.offsetLeft+"px";
  marker.style.width=e.offsetWidth+"px";
}
document.querySelectorAll("nav a").forEach((item, i) => {
  item.addEventListener("click",(e)=>{
    indicator(e.target);
  })
});
