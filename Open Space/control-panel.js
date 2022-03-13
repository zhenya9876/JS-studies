let controlElements = [];
function disableControls(){
    for (let check of document.getElementsByClassName("check-buttons")[0]
        .getElementsByTagName("input")) {
        controlElements.push(check);}
    for (let lever of document.getElementsByClassName("lever")) {
        controlElements.push(lever);
    }
    controlElements.push(document.getElementById("launchBtn"));
    controlElements.forEach(value => value.disabled = true);
    document.getElementById("okBtn").addEventListener("click", activatePanel);
}
window.addEventListener("load", disableControls);
function activatePanel() {
    document.getElementById("passBox").disabled = true;
    document.getElementById("okBtn").disabled = true;
   if (document.getElementById("passBox").value == "TrustNo1") {
        controlElements.forEach(value => value.disabled = false);
    }
}