
    
    const getCurrentTime = () => {

        const options = {
            timezone: "Asia/Seoul",
            hour12: true,
            weekday: "long",
            year: "2-digit",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute:"numeric",
            second:"numeric"
        };

        const currentTime = new Date().toLocaleString("en-US", options);
    

    //Render
    document.querySelector(".clock").innerHTML = currentTime;

    setTimeout(getCurrentTime,100);


}