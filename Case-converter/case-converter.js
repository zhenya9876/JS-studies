class CaseConverter{
    static convert(text, conversion) {
        let result;
        switch (conversion) {
            case "upper-case":
                result = text.toUpperCase();
                break;
            case "lower-case":
                result = text.toLowerCase();
                break;
            case "proper-case":
                result = text.toLowerCase();
                let words = result.split(/[\s]+/); ///[\s\,\.\!\?\-\:\;]+/
                let newWords = [];
                for (let word of words) {
                    newWords.push(this.replaceAt(word,0, word.charAt(0).toUpperCase()));
                }
                result = newWords.join(" ");
                break;
            case "sentence-case":
                result = text.toLowerCase();
                let sentences = result.split(/[\s]+/);
                let newSentences = [];
                for (let i = 0; i < sentences.length; i++) {
                    if ((i == 0) || (sentences[i - 1].includes('.')) ||
                        (sentences[i - 1].includes('!')) || (sentences[i - 1].includes('?'))) {
                        newSentences.push(this.replaceAt(sentences[i], 0, sentences[i].charAt(0).toUpperCase()));
                        // newSentences.push(sentences[i]);
                    }else {newSentences.push(sentences[i]);}
                }
                result = newSentences.join(" ");

            default:
                return result;
                break;
        }
        return result;
    }
    static replaceAt = function(str, index, replacement) {
        return str.substr(0, index) + replacement + str.substr(index + replacement.length);
    }
}

class App{
    static buttons = [
        document.getElementById("lower-case"),
        document.getElementById("upper-case"),
        document.getElementById("proper-case"),
        document.getElementById("sentence-case")
    ]
    // static textArea = document.getElementsByTagName("textarea");
    // static btnLowerCase = document.getElementById("lower-case");
    // static btnUpperCase = document.getElementById("upper-case");
    // static btnProperCase = document.getElementById("proper-case");
    // static btnSentenceCase = document.getElementById("sentence-case");

    init () {
        for (let button of App.buttons) {
            button.onclick = this.onClick;
        }
    }
    onClick(e) {
        let textArea = document.getElementById("myTextArea");
        const buttonId = e.target.id;
        textArea.value
            = CaseConverter.convert(textArea.value, buttonId);
    }
}
const app =new App();
app.init();