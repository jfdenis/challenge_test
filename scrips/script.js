const btnHome = document.getElementById("home");
const btnAbout = document.getElementById("section_About");
const btnPortfolio = document.getElementById("section_Portfolio");
const btnBlog = document.getElementById("section_Blog");
const btnContact = document.getElementById("section_Contact");

let count = 0;
const printId = (item) => {
  console.log({ id: item.id, count: count++ });
};

let color = () => Math.floor(Math.random() * 256);
const rgbRandom = () => `rgb(${color()}, ${color()}, ${color()})`;

function color_Change() {
  btnHome.addEventListener("click", restaurar);
  btnAbout.addEventListener("click", restaurar1);
  btnPortfolio.addEventListener("click", restaurar2);
  btnBlog.addEventListener("click", restaurar3);
  btnContact.addEventListener("click", restaurar4);
}

function restaurar() {
  btnHome.style.backgroundColor = rgbRandom();
  btnAbout.style.backgroundColor = "#d6d6d6";
  btnPortfolio.style.backgroundColor = "#d6d6d6";
  btnBlog.style.backgroundColor = "#d6d6d6";
  btnContact.style.backgroundColor = "#d6d6d6";
}
function restaurar1() {
  btnHome.style.backgroundColor = "#d6d6d6";
  btnAbout.style.backgroundColor = rgbRandom();
  btnPortfolio.style.backgroundColor = "#d6d6d6";
  btnBlog.style.backgroundColor = "#d6d6d6";
  btnContact.style.backgroundColor = "#d6d6d6";
}

function restaurar2() {
  btnHome.style.backgroundColor = "#d6d6d6";
  btnAbout.style.backgroundColor = "#d6d6d6";
  btnPortfolio.style.backgroundColor = rgbRandom();
  btnBlog.style.backgroundColor = "#d6d6d6";
  btnContact.style.backgroundColor = "#d6d6d6";
}

function restaurar3() {
  btnHome.style.backgroundColor = "#d6d6d6";
  btnAbout.style.backgroundColor = "#d6d6d6";
  btnPortfolio.style.backgroundColor = "#d6d6d6";
  btnBlog.style.backgroundColor = rgbRandom();
  btnContact.style.backgroundColor = "#d6d6d6";
}

function restaurar4() {
  btnHome.style.backgroundColor = "#d6d6d6";
  btnAbout.style.backgroundColor = "#d6d6d6";
  btnPortfolio.style.backgroundColor = "#d6d6d6";
  btnBlog.style.backgroundColor = "#d6d6d6";
  btnContact.style.backgroundColor = rgbRandom();
}
