let kbdsWhite = document.getElementsByClassName("white-keys")[0]
    .getElementsByTagName("kbd");
let kbdsBlack = document.getElementsByClassName("black-keys")[0]
    .getElementsByTagName("kbd");

let mousePressedKey = '';
// changing keys in array you can change a keyboard layout
let keysWhiteArray = ['A','S','D','F','G','H','J'];
let keysBlackArray = ['W','E','T','Y','U']

for (let i = 0; i < kbdsWhite.length; i++) {
    kbdsWhite[i].innerText = keysWhiteArray[i];
    kbdsWhite[i].onmousedown = pressKey;
    kbdsWhite[i].onmouseup = releaseKey;
}
for (let i = 0; i < kbdsBlack.length; i++) {
    kbdsBlack[i].innerText = keysBlackArray[i];
    kbdsBlack[i].onmousedown = pressKey;
    kbdsBlack[i].onmouseup = releaseKey;
}

document.onmouseup = releaseKey;
// document.onmouseup = function () {
//     for (let kbdsWhiteElement of kbdsWhite) {
//         kbdsWhiteElement.classList.remove("kbd-active");
//     }
//     for (let kbdsBlackElement of kbdsBlack) {
//         kbdsBlackElement.classList.remove("kbd-active");
//     }
// }
document.onkeypress = pressKey;
function pressKey(evt) {
    let charCode = evt.keyCode || evt.which;
    let charStr;
    if (charCode == 1) {
        charStr = evt.target.innerText;
        mousePressedKey = charStr;}
    else charStr = String.fromCharCode(charCode).toUpperCase();
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

document.onkeyup = releaseKey;
    function releaseKey(evt) {
        let charCode = evt.keyCode || evt.which;
        let charStr;
        if (charCode == 1) {
            if (evt.target.tagName.toLowerCase() != "kbd")
                charStr = mousePressedKey;
            else charStr = evt.target.innerText;
        }
        else charStr = String.fromCharCode(charCode).toUpperCase();
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
                if (charCode == 1) mousePressedKey = '';
            }
        }
    }