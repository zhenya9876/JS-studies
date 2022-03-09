function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function onClick () {
    download("text.txt", textArea.value);
}

let textArea = document.getElementById("myTextArea");
document.getElementById("save-text-file").onclick = onClick;

// Start file download.
// download("hello.txt","This is the content of my file :)");