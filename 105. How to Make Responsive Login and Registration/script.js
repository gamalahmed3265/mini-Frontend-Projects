
let contanier=document.querySelector(".contanier");
let butn=document.querySelectorAll(".contanier .user .formBox form a");
let formList=document.querySelectorAll(".contanier .user .formBox form");

function toggleCon(){
  contanier.classList.toggle("active");
}


butn.forEach((itembutn, i) => {
      itembutn.addEventListener("click",(e)=>{
        e.preventDefault();
        toggleCon();
      });
  });



// formList.forEach((itemform, i) => {
//   itemform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     butn.forEach((itembutn, i) => {
//       itembutn.addEventListener("click",(e)=>{
//         toggleCon();
//       });
//     });
//   })
// });
