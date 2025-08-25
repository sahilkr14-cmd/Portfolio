var tabs = document.getElementsByClassName("tab-links");
var tabconts = document.getElementsByClassName("tab-content");

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