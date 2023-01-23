var doc=window.document.documentElement;
let banner=document.querySelector("banner"),
    content=document.querySelector("content");

mousemove=(e)=>{
  doc.style.setProperty("--x",e.clientX+"px");
  doc.style.setProperty("--y",e.clientY+"px");
  console.log(doc);
}

doc.addEventListener("mousemove",mousemove);