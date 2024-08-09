const hourHand = document.querySelector(".hour-hand");
const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
    const now = new Date()
    //seconds hand part
    const seconds = now.getSeconds();
    const secDegree = ((seconds / 60) * 360 )+ 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;
    second.innerHTML = seconds

    //minutes hand part
    const minutes = now.getMinutes();
    const minDegree = ((minutes / 60 )* 360)+ 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    minute.innerHTML = minutes

    //hours hand part
    const hours = now.getHours()
    const hourDegree = ((hours / 60 )* 360)+ 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    hour.innerHTML = hours

    

}
setInterval(setDate, 1000)