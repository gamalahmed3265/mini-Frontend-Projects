let curve=document.querySelector(".curve");

window.addEventListener("scroll",function(){
    var value=1+window.scrollY/-500;
    curve.style.transform=`scaleY(${value})`
});
