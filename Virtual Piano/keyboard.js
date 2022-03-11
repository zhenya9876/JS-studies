document.onkeypress =
function printKey(evt) {
    evt = evt;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode).toUpperCase();
    if (['A','S','D','F','G','H','J'].includes(charStr))
        console.log('The \'' + charStr.toString() + '\' key is pressed.');
    else
        console.log("warning");
}