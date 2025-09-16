var tabs = document.getElementsByClassName("tab-links");
var tabconts = document.getElementsByClassName("tab-content");
var sidemeu = document.getElementById("sidemenu");

function opentab(tabname) {
    for (tab of tabs) {
        tab.classList.remove("active-link");
    }
    for (tabcont of tabconts) {
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbw-yN1aWkEkmjbICorKtIx3FT9Yncg47Hjd2nWVuZDD2MagSVGQgM0F20gnEvLZWkWCzw/exec'
const form = document.forms['submit-to-google-sheet']
const mess = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            mess.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Message Sent Successfully. '
            setTimeout(function(){
                mess.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
    let bars = document.querySelectorAll(".bar");
    let mq = window.matchMedia("(max-width: 768px)");

    bars.forEach(bar => {
        let progress = 0;

        // Different targets for desktop vs mobile
        let desktopTarget = parseInt(bar.getAttribute("data-target"));
        let mobileTarget = parseInt(bar.getAttribute("data-target-mobile")) || desktopTarget;

        let target = mq.matches ? mobileTarget : desktopTarget;

        let interval = setInterval(() => {
            if (progress < target) {
                progress++;
                bar.style.width = progress + "%";
            } else {
                clearInterval(interval);
            }
        }, 30);
    });
