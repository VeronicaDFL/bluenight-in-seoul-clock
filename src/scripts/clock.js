const getCurrentTime = () => {
    //GET NEW DATE
    const today = new Date();
    //Convert
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let millisecond = today.getMilliseconds();
    //Day Array
    const dayArray = [
        "Sun", "Mon", "Tue", "Wed","Thur","Fri","Sat"
    ];

    //Check leading zero

    hour = checkLeadingZero(hour);
    minute = checkLeadingZero(minute);
    seconds = checkLeadingZero(seconds);
    
    //Assemble
    let currentTime = `${dayArray[day]} : ${hour} : ${minute} : ${seconds} : ${millisecond}`;
    


    //Render
    document.querySelector(".clock").innerHTML = currentTime;

    setTimeout(getCurrentTime,10);
}

const checkLeadingZero = (paramTime) => {
    paramTime < 10
    ? paramTime = `0${paramTime}`
    : null

    return paramTime;
}