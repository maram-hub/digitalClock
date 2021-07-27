function showTime() {
    let date = new Date();
    let hour = date.getHours(); // 0 - 23
    let minute = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    // document.getElementById("MyClockDisplay").textContent = time;

    // setTimeout(showTime, 1000);

}
setInterval(() => {
    showTime();
}, 1000);

