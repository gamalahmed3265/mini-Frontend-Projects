print=(messge)=>console.log(messge);


let iconsBox=document.querySelectorAll(".iconsBox"),
   contentbox=document.querySelectorAll(".contentbox");

for (var i = 0; i < iconsBox.length; i++) {
   iconsBox[i].addEventListener("mouseover",function (){
      
   for (var i = 0; i < contentbox.length; i++) {
         contentbox[i].className="contentbox";
      }

   document.getElementById(this.dataset.id).className='contentbox active';

   for (var i = 0; i < iconsBox.length; i++) {
      iconsBox[i].className="iconsBox"
      }
   this.className='iconsBox active';
   });
  
}