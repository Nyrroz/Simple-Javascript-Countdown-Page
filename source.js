function countDown(){
    const countDate = new Date("May 10, 2021 13:50:00").getTime();
    const now = new Date().getTime();
    console.log(countDate, now)
    
    //When countdown is finished 
    if (countDate <= now) {

        alert("Yeah!!!")

        //return "That's not in the future"
    }
    else {
        const gap = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.querySelector('.timeDay').innerText = textDay;
        document.querySelector('.timeHour').innerText = textHour;
        document.querySelector('.timeMinute').innerText = textMinute;
        document.querySelector('.timeSecond').innerText = textSecond;
    }


}

setInterval(countDown, 1000);