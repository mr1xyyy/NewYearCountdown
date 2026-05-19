const kun = document.getElementById("days")
const soat = document.getElementById("hours")
const min = document.getElementById("minutes")
const sek = document.getElementById("seconds")

const newYear = "1 Jan 2027";

function countdown(){
    const newYearData = new Date(newYear);
    const currentData = new Date();

    const totallSeconds = (newYearData-currentData)/1000;
    const d = Math.floor(totallSeconds / 3600 / 24);
    const h = Math.floor(totallSeconds/3600)%24;
    const m = Math.floor(totallSeconds/ 60) % 60;
    const s = Math.floor(totallSeconds) % 60;

    kun.innerHTML=timeFormat(d);
    soat.innerHTML=timeFormat(h);
    min.innerHTML=timeFormat(m);
    sek.innerHTML=timeFormat(s);
}
function timeFormat(time){
    return time<10?`0${time}`:time;
}
countdown();
setInterval(countdown,1000);