let kbdsWhite = document.getElementsByClassName("white-keys")[0]
    .getElementsByTagName("kbd");
let kbdsBlack = document.getElementsByClassName("black-keys")[0]
    .getElementsByTagName("kbd");
let keysWhiteArray = ['A','S','D','F','G','H','J'];
let keysBlackArray = ['W','E','T','Y','U']

for (let i = 0; i < kbdsWhite; i++) {
    kbdsWhite[i].innerText = keysWhiteArray[i];
}
for (let i = 0; i < kbdsBlack; i++) {
    kbdsBlack[i].innerText = keysWhiteArray[i];
}

document.onkeypress =
function pressKey(evt) {
    evt = evt;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode).toUpperCase();
    if (keysWhiteArray.includes(charStr) || keysBlackArray.includes(charStr))
    {
        let audioObj;
        switch (charStr) {
            case keysWhiteArray[0]:
                audioObj = new Audio("sounds/FX-C.mp3");
                kbdsWhite[0].classList.add("kbd-active");
                break;
            case keysWhiteArray[1]:
                audioObj = new Audio("sounds/FX-D.mp3");
                kbdsWhite[1].classList.add("kbd-active");
                break;
            case keysWhiteArray[2]:
                audioObj = new Audio("sounds/FX-E.mp3");
                kbdsWhite[2].classList.add("kbd-active");
                break;
            case keysWhiteArray[3]:
                audioObj = new Audio("sounds/FX-F.mp3");
                kbdsWhite[3].classList.add("kbd-active");
                break;
            case keysWhiteArray[4]:
                audioObj = new Audio("sounds/FX-G.mp3");
                kbdsWhite[4].classList.add("kbd-active");
                break;
            case keysWhiteArray[5]:
                audioObj = new Audio("sounds/FX-A.mp3");
                kbdsWhite[5].classList.add("kbd-active");
                break;
            case keysWhiteArray[6]:
                audioObj = new Audio("sounds/FX-B.mp3");
                kbdsWhite[6].classList.add("kbd-active");
                break;
            case keysBlackArray[0]:
                audioObj = new Audio("sounds/FX-Cs.mp3");
                kbdsBlack[0].classList.add("kbd-active");
                break;
            case keysBlackArray[1]:
                audioObj = new Audio("sounds/FX-Ds.mp3");
                kbdsBlack[1].classList.add("kbd-active");
                break;
            case keysBlackArray[2]:
                audioObj = new Audio("sounds/FX-Fs.mp3");
                kbdsBlack[2].classList.add("kbd-active");
                break;
            case keysBlackArray[3]:
                audioObj = new Audio("sounds/FX-Gs.mp3");
                kbdsBlack[3].classList.add("kbd-active");
                break;
            case keysBlackArray[4]:
                audioObj = new Audio("sounds/FX-As.mp3");
                kbdsBlack[4].classList.add("kbd-active");
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
        if (keysWhiteArray.includes(charStr) || keysBlackArray.includes(charStr)) {
            switch (charStr) {
                case keysWhiteArray[0]:
                    kbdsWhite[0].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[1]:
                    kbdsWhite[1].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[2]:
                    kbdsWhite[2].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[3]:
                    kbdsWhite[3].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[4]:
                    kbdsWhite[4].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[5]:
                    kbdsWhite[5].classList.remove("kbd-active");
                    break;
                case keysWhiteArray[6]:
                    kbdsWhite[6].classList.remove("kbd-active");
                    break;
                case keysBlackArray[0]:
                    kbdsBlack[0].classList.remove("kbd-active");
                    break;
                case keysBlackArray[1]:
                    kbdsBlack[1].classList.remove("kbd-active");
                    break;
                case keysBlackArray[2]:
                    kbdsBlack[2].classList.remove("kbd-active");
                    break;
                case keysBlackArray[3]:
                    kbdsBlack[3].classList.remove("kbd-active");
                    break;
                case keysBlackArray[4]:
                    kbdsBlack[4].classList.remove("kbd-active");
                    break;
            }
        }
    }