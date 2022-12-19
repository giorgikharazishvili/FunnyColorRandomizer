const title = document.getElementById("title");
const titleSeperated = document.getElementById("title-seperated");
const textInput = document.getElementById("textInput");
const cancelButton = document.getElementById("cancel-button");

let colors = ["red", "green", "broun", "yellow",
    "blue", "orenge", "black", "cyan", "#FE4A49",
    "#FE4A49", "#512D38", "#B27092", "#87BAAB",
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D']


// Generate Random number
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

textInput.addEventListener("input", (event) => {
    title.textContent = event.target.value;
    stop();
    start();
});


cancelButton.addEventListener("click", (event) => {
    stop();
    cancelButton.style.backgroundColor = "rgb(255, 93, 93)";
    textInput.value = "";
    textInput.style.backgroundColor = "wheat";
    // event.target.previousSibling.value = "";
    // event.target.previousSibling.style.backgroundColor = "wheat";
});



let interval;
function start() {
    interval = setInterval(() => {
        Array.from(titleSeperated.childNodes).map((span, index) => {
            span.style.color = colors[randomNumber(0, colors.length - 1)];
            span.style.fontSize = `${randomNumber(20, 200)}px`;
            document.body.style.backgroundColor = colors[randomNumber(0, colors.length - 1)];
            textInput.style.backgroundColor = colors[randomNumber(0, colors.length / 5 * 4)];
            cancelButton.style.backgroundColor = colors[randomNumber(0, colors.length / 6 * 5)];
        });
    }, 800);

    for (i = 0; i < title.textContent.length; i++) {
        let charachter = title.textContent[i];
        let span = document.createElement("span");
        span.textContent = charachter;
        titleSeperated.appendChild(span);
    }
};

function stop() {
    clearInterval(interval);
    document.body.style.backgroundColor = "white";

    Array.from(titleSeperated.childNodes).map((span) => {
        span.remove();
    });
}