const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Web auto typing feature";
let index = 1;
let speed = 200;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value
});
