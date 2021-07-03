const qTxt = document.getElementById("quotes");
const qAuth = document.getElementById("author");
const btn = document.getElementById("btn");

function randomQ() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      qTxt.textContent = `- ${data.content}`;
      qAuth.textContent = `-- ${data.author}`;
    });
}

randomQ();

btn.addEventListener("click", () => {
  randomQ();
});
