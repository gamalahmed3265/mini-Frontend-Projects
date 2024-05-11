let textHeading="CSS Card Hover Effects  Html CSS"
let h2=document.querySelector(".container> h2");


for (var i = 0; i <textHeading.length ; i++) {
  let span=document.createElement("span");
  const spantext = document.createTextNode(textHeading[i]);
  span.appendChild(spantext);
  h2.appendChild(span);


  // span.style=`transition: ${i*100}s all;display:inline-block; transform: translateY(5px);`
  // span.style=`transition: ${i*100}s all;`
  // span.style=`transition: ${i*100}s all;display:inline-block; transform: translateY(-5px);`

  }
