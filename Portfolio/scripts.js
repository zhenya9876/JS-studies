var openWindowBtns;
var windowTitle;
var windowText;
var windowCancel;
var windowPopUp;
var hamburgerLabel;
var navMenu;
window.onload = function (){
    openWindowBtns = document.getElementsByClassName("open-window");
    for (let openWindowBtn of openWindowBtns) {
        openWindowBtn.onclick = showWindow;
    }
    windowTitle = document.getElementById("windowTitle");
    windowText = document.getElementById("windowText");
    windowCancel = document.getElementById("windowCancel");
    windowPopUp = document.getElementsByClassName("window")[0];
    document.getElementById("menu-checkbox").onchange = showMenu;
    hamburgerLabel = document.getElementsByClassName("hamburger")[0].getElementsByTagName("label")[0];
    navMenu = document.getElementById("navMenu");
}

function showWindow(event) {
    const entryTitle = event.target.parentElement.getElementsByTagName("p")[0].innerText;
    windowTitle.innerText = entryTitle.toString();
    // windowText.outerText = null;
    windowPopUp.classList.add("window-opened");
    if(entryTitle == "To-Do List") {
      windowText.innerText = "This project was my firs JS experience, there you can add " +
          "tasks, delete and check them to cross out the task. List of tasks is saved to local storage."
        windowText.insertAdjacentHTML("beforeend",
            "<br><a href='https://github.com/zhenya9876/JS-studies/tree/master/Open%20Space'>To-Do List</a>");
    } else if (entryTitle == "Virtual Piano"){
        windowText.innerText = "Title is pretty self explanatory. On this piano you can play with keyboard or mouse.";
        windowText.insertAdjacentHTML("beforeend",
            "<br><a href='https://github.com/zhenya9876/JS-studies/tree/master/Virtual%20Piano'>Virtual Piano</a>");
    } else if (entryTitle == "Open Space"){
        windowText.innerText = "This project was a good practice of positioning and transforming elements with CSS";
        windowText.insertAdjacentHTML("beforeend",
            "<br><a href='https://github.com/zhenya9876/JS-studies/tree/master/Open%20Space'>Open Space</a>");
    }

    windowCancel.onclick = function (){
        windowPopUp.classList.remove("window-opened");
    };
}

function showMenu(event) {
    if (event.target.checked) {
        navMenu.classList.add("menu-open");
    } else {
        navMenu.classList.remove("menu-open");
    }
}