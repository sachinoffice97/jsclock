
var increment1;
var increment2;

const update = () => {
    clearInterval(increment2);
    let time;
    let dateString;
    let hours, min, sec;
    let p = document.getElementsByClassName("lead");
    increment1 = setInterval(() => {
        time = new Date();
        hours = time.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 });
        min = time.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 });
        sec = time.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 });
        dateString = hours + ":" + min + ":" + sec;
        p[0].innerHTML = "Current Time is : " + dateString;
    }, 1000);
    
}

const update1 = () => {
    clearInterval(increment1);
    let time;
    let dateString;
    let hours, min, sec;
    let p = document.getElementsByClassName("lead");
    increment2 = setInterval(() => {
        time = new Date();
        hours = time.getUTCHours().toLocaleString('en-GB', {minimumIntegerDigits: 2 });
        min = time.getUTCMinutes().toLocaleString('en-GB', { minimumIntegerDigits: 2 });
        sec = time.getUTCSeconds().toLocaleString('en-GB', { minimumIntegerDigits: 2 });
        dateString = hours + ":" + min + ":" + sec;
        p[0].innerHTML = "Current Time is : " + dateString;
    }, 1000);
}

let but1 = document.getElementById("btn1");
but1.addEventListener('click', () => {
    update();
});

let but2 = document.getElementById("btn2");
but2.addEventListener('click', () => {
    update1();
});




