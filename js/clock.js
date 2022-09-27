const clock = document.querySelector("#main-clock");

function showCurrentTime (){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    clock.innerText = `${hour}:${min}`;
}
showCurrentTime ();
setInterval(showCurrentTime , 1000);