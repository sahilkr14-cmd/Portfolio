var tabs = document.getElementsByClassName("tab-links");
var tabconts = document.getElementsByClassName("tab-content");
var sidemeu = document.getElementById("sidemenu");

function opentab(tabname) {
    for (tab of tabs) {
        tab.classList.remove("active-link");
    }
    for (tabcont of tabconts){
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}