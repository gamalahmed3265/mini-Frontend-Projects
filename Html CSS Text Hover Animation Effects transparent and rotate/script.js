let textAll=document.querySelectorAll(".text");
textAll.forEach((text)=>{
  const span=Array.from(text.textContent.trim()).map(
  char=>` <span>${char===""? "&nbsp": char}</span>`
).join("");
  text.innerHTML=span;

  let spansList=document.querySelectorAll(".text span");

  spansList.forEach((spanevent,index)=>{
    spanevent.addEventListener("mouseover",(e)=>{
      spansList.forEach((item, j) => {
        const distance=Math.abs(index-j);
        const delay=(distance*0.1).toFixed(1);
        item.style.transitionDelay=`${delay}s`;
      });

    })

  })

})
