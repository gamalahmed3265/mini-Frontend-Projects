print=(messge)=>console.log(messge);



addEvent=(e)=> {
	var body=document.querySelector("body"),
		span=document.createElement("span"),
		y=e.offsetY,x=e.offsetX,
		size=Math.floor(Math.random()*100);

	span.style.left=`${x}px`;
	span.style.top=`${y}px`;

	span.style.width=`${20+size}px`;
	span.style.height=`${20+size}px`;

	body.appendChild(span);

	removeElemeny=()=>{
		span.remove();
	}

	setTimeout(removeElemeny,2000)
}
document.addEventListener("mousemove",addEvent);