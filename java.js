function updateClock() {
    const now = new Date()
    const hour = String(new Date().getHours());
    const mins = String(new Date().getMinutes());
    const secs = String(new Date().getSeconds());

    document.getElementById("clock").textContent=`${hour.length > 1 ? hour : '0' + hour}:${mins.length > 1 ? mins : '0' + mins}:${secs.length > 1 ? secs : '0' + secs}`;
}
        w
setInterval(updateClock, 1000);
updateClock()
