const hourHand = document.querySelector(".hour-hand");
const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");

function setDate() {
    const now = new Date()
    //secounds hand part
    const secounds = now.getSeconds();
    const secDegree = ((secounds / 60) * 360 )+ 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;

    //minutes hand part
    const minutes = now.getMinutes();
    const minDegree = ((minutes / 60 )* 360)+ 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    //hour hand part
    const hour = now.getHours()
    const hourDegree = ((hour / 60 )* 360)+ 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    

}
setInterval(setDate, 1000)