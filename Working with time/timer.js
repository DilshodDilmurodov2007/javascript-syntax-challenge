  let display = document.getElementById("display");
        let timer = null;
       
        function start() {
            let hr = Number(document.getElementById("hr").value);
            let min = Number(document.getElementById("min").value);
            let sec = Number(document.getElementById("sec").value);
            if(!hr) {hr = 0}
            if(!min) {min = 0};
            if(!sec) {sec = 0}
            let totalSeconds = ((hr * 60*60) + (min * 60) + sec);
            if(timer) clearInterval(timer);
            timer = setInterval(function() {
                  if (totalSeconds === 0) {
                clearInterval(timer)
                timeup.textContent = "Time's up!!!";
            }
            let h = Math.floor(totalSeconds / (60 * 60)).toString().padStart(2, "0");
            let m = Math.floor(totalSeconds / (60) % 60).toString().padStart(2, "0");
            let s = (totalSeconds % 60).toString().padStart(2, "0");
            totalSeconds = totalSeconds - 1;
            display.textContent = `${h}:${m}:${s}`;
            }, 1000);
            totalSeconds = ((hr * 60*60) + (min * 60) + sec);
        }