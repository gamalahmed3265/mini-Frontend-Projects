print=(messge)=>console.log(messge);

changeSrcSlider=(srcNum)=>{
 var video = document.querySelector("#sildpar");
    var sources = video.getElementsByTagName('source');
    sources[0].src = `assest/video/${srcNum}.mp4`;
    video.load();
}
addEventItem=(e)=>{
	changeSrcSlider(e.target.src.slice(-5,-4));
}

document.querySelectorAll("#nav li").forEach((e,i)=>{
	e.addEventListener("click",addEventItem);
	
})