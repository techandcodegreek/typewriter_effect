const words = ['Javascript', 'Python', 'Docker', 'NodeJS', 'SQL']
let count = 0;
let index = 0;
let currentText = "";

(function type(){
    timeout = 200
    if (count === words.length) {
        count = 0;
    }
    currentText = words[count]
    letter = currentText.slice(0, ++index)
    document.querySelector('.typewriter').textContent = letter;
    if (letter.length == currentText.length) {
        timeout = 1000
        count++
        index = 0;
    }

    setTimeout(type, timeout);
})();