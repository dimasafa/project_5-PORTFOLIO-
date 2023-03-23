    // Time

function time() {
    const officeTime = document.querySelector('.Intero__bottomLine__time');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        if (hours.toString().length === 1) {
            hours = '0' + hours.toString();
        }
        if (minutes.toString().length === 1) {
            minutes = '0' + minutes.toString();
        }
        if (seconds.toString().length === 1) {
            seconds = '0' + seconds.toString();
        }


        officeTime.innerHTML = `Office time ${hours}:${minutes}:${seconds}`;
    }

        setInterval(updateClock, 1000);
        updateClock();
}

export default time;
