function UpdateCLock(){
    const hourEl = document.getElementById("hour");
    const minEl = document.getElementById("min");
    const secEl = document.getElementById("sec");

    const now = new Date();

    hourEl.innerText = now.getHours().toString();
    minEl.innerText = now.getMinutes().toString();
    secEl.innerText = now.getSeconds().toString();

}

setInterval(UpdateCLock,1000)

UpdateCLock();