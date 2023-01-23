// let timeTags=document.querySelector(".time")
let hoursTag=document.querySelector("#hours"),
    minutesTag=document.querySelector("#minutes"),
    secondsTag=document.querySelector("#seconds");
    ampmTag=document.querySelector("#AMPM");

function clock(){
let date=new Date();
    hoursValue=date.getHours(); 
    minutesValue=date.getMinutes(),
    secondsValue=date.getSeconds();

    if (hoursValue<10){
      hoursValue=`0${hoursValue}`
    }
    if (hoursValue>12){
      hoursValue=`0${hoursValue-12}`;
      ampmTag.innerHTML="PM";      
    }
    else{
      ampmTag.innerHTML="AM";      
    }
    if (minutesValue<10){
      minutesValue=`0${minutesValue}`
    }
    if (secondsValue<10){
      secondsValue=`0${secondsValue}`
    }

    if (minutesValue>55 && secondsValue>55){
      hoursTag.parentElement.classList.toggle("finish");
    }
    if (minutesValue>55){
      minutesTag.parentElement.classList.toggle("finish");
    }
    if (secondsValue>55){
      secondsTag.parentElement.classList.toggle("finish");
    }
    hoursTag.innerHTML=hoursValue;
    minutesTag.innerHTML=minutesValue;
    secondsTag.innerHTML=secondsValue;
}

setInterval(clock,1000);


  // time=()=>{
//   text=`
//   <div>
//     <span>00</span>
//     <span>Hours</span>
//   </div>
//   `
//   return text;
// }
// const createelem=document.append()
// timeTags.appendChild("<span>00</span>");

// console.log(minutes.innerText);