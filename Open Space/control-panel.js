let checkElements = [];
let rangeElements = [];
function disableControls(){
    for (let check of document.getElementsByClassName("check-buttons")[0]
        .getElementsByTagName("input")) {
        check.onchange = onControlChange;
        checkElements.push(check);
    }
    for (let lever of document.getElementsByClassName("lever")) {
        lever.onchange = onControlChange;
        rangeElements.push(lever);
    }
    document.getElementById("launchBtn").disabled = true;
    document.getElementById("launchBtn").onclick = launch;
    checkElements.forEach(value => value.disabled = true);
    rangeElements.forEach(value => value.disabled = true);
    document.getElementById("okBtn").addEventListener("click", activatePanel);
}
window.addEventListener("load", disableControls);
function activatePanel() {
    document.getElementById("passBox").disabled = true;
    document.getElementById("okBtn").disabled = true;
   if (document.getElementById("passBox").value == "TrustNo1") {
        rangeElements.forEach(value => value.disabled = false);
        checkElements.forEach(value => value.disabled = false);
    }
}
function onControlChange() {
    for (let checkElement of checkElements) {
        if (!checkElement.checked) {
            document.getElementById("launchBtn").disabled = true;
            return false;}
    }
    for (let rangeElement of rangeElements) {
        if (rangeElement.value!=100) {document.getElementById("launchBtn").disabled = true;
            return false;}
    }
    document.getElementById("launchBtn").disabled = false;
}
function launch(){
    document.getElementsByClassName("rocket")[0].classList.add("launched");
}