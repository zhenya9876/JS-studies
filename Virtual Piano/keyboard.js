let kbds = document.getElementsByTagName("kbd");
let keysWhiteArray = ['A','S','D','F','G','H','J'];
for (let i = 0; i < kbds.length; i++) {
    kbds[i].innerText = keysWhiteArray[i];
}

document.onkeypress =
function pressKey(evt) {
    evt = evt;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode).toUpperCase();
    if (keysWhiteArray.includes(charStr))
    {
        let audioObj;
        switch (charStr) {
            case keysWhiteArray[0]:
                audioObj = new Audio("sounds/FX-C.mp3");
                kbds[0].classList.add("kbd-active");
                break;
            case keysWhiteArray[1]:
                audioObj = new Audio("sounds/FX-D.mp3");
                kbds[1].classList.add("kbd-active");
                break;
            case keysWhiteArray[2]:
                audioObj = new Audio("sounds/FX-E.mp3");
                kbds[2].classList.add("kbd-active");
                break;
            case keysWhiteArray[3]:
                audioObj = new Audio("sounds/FX-F.mp3");
                kbds[3].classList.add("kbd-active");
                break;
            case keysWhiteArray[4]:
                audioObj = new Audio("sounds/FX-G.mp3");
                kbds[4].classList.add("kbd-active");
                break;
            case keysWhiteArray[5]:
                audioObj = new Audio("sounds/FX-A.mp3");
                kbds[5].classList.add("kbd-active");
                break;
            case keysWhiteArray[6]:
                audioObj = new Audio("sounds/FX-B.mp3");
                kbds[6].classList.add("kbd-active");
                break;
        }
                audioObj.play();
    } else
        console.log("warning");
}

document.onkeyup =
    function releaseKey(evt) {
        evt = evt;
        let charCode = evt.keyCode || evt.which;
        let charStr = String.fromCharCode(charCode).toUpperCase();
        if (keysWhiteArray.includes(charStr)) {
            switch (charStr) {
                case keysWhiteArray[0]:
                    kbds[0].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[1]:
                    kbds[1].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[2]:
                    kbds[2].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[3]:
                    kbds[3].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[4]:
                    kbds[4].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[5]:
                    kbds[5].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[6]:
                    kbds[6].classList.remove("kbd-active");
                    break;
            }
        }
    }