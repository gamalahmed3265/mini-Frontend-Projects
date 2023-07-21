
document.querySelector(".btn").addEventListener("click",(e)=>{
    document.querySelector(".content").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".btn").classList.toggle("active");
    document.querySelector("ul").classList.toggle("active");
});
