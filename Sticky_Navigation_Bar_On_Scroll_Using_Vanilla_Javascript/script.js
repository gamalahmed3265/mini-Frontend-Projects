inScroll=()=>{
  let header=document.querySelector("header");
  // console.log(window.scrollY>0);
  header.classList.toggle("sticky",window.scrollY>0);
}

window.addEventListener("scroll",inScroll);