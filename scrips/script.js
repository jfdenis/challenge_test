const btnHome = document.getElementById('section_Home')
const btnAbout = document.getElementById('section_About')
const btnPortfolio = document.getElementById('section_Portfolio')
const btnBlog = document.getElementById('section_Blog')
const btnContact = document.getElementById('sectiob_Contact')

let color = () => Math.floor(Math.random() * (256))
let count = 0  

function color_Change(){
    btnHome.addEventListener("click", restaurar);
    btnAbout.addEventListener("click", restaurar1);
    btnPortfolio.addEventListener("click", restaurar2);
    btnBlog.addEventListener("click", restaurar3);
    btnContact.addEventListener("click", restaurar4);
}

function restaurar(){
    let id = 'home'
    count = count +1
    let rgbRandom = "rgb("+color()+","+color()+","+color()+")"
    btnHome.style.backgroundColor = rgbRandom
    btnAbout.style.backgroundColor = "#d6d6d6"
    btnPortfolio.style.backgroundColor = "#d6d6d6"
    btnBlog.style.backgroundColor = "#d6d6d6"
    btnContact.style.backgroundColor = "#d6d6d6"
    console.log(`id: ${id} count: ${count}`)
}
function restaurar1(){
    let id = 'about'
    let rgbRandom = "rgb("+color()+","+color()+","+color()+")"
    btnHome.style.backgroundColor = "#d6d6d6"
    btnAbout.style.backgroundColor = rgbRandom
    btnPortfolio.style.backgroundColor = "#d6d6d6"
    btnBlog.style.backgroundColor = "#d6d6d6"
    btnContact.style.backgroundColor = "#d6d6d6"
    console.log(`id: ${id} count: ${count}`)
}

function restaurar2(){
    let id = 'portfolio'
    let rgbRandom = "rgb("+color()+","+color()+","+color()+")"
    btnHome.style.backgroundColor = "#d6d6d6"
    btnAbout.style.backgroundColor = "#d6d6d6"
    btnPortfolio.style.backgroundColor = rgbRandom
    btnBlog.style.backgroundColor = "#d6d6d6"
    btnContact.style.backgroundColor = "#d6d6d6"
    console.log(`id: ${id} count: ${count}`)
}

function restaurar3(){
    let id = 'blog'
    let rgbRandom = "rgb("+color()+","+color()+","+color()+")"
    btnHome.style.backgroundColor = "#d6d6d6"
    btnAbout.style.backgroundColor = "#d6d6d6"
    btnPortfolio.style.backgroundColor = "#d6d6d6"
    btnBlog.style.backgroundColor =  rgbRandom
    btnContact.style.backgroundColor = "#d6d6d6"
    console.log(`id: ${id} count: ${count}`)
}

function restaurar4(){
    let id = 'contact'
    let rgbRandom = "rgb("+color()+","+color()+","+color()+")"
    btnHome.style.backgroundColor = "#d6d6d6"
    btnAbout.style.backgroundColor = "#d6d6d6"
    btnPortfolio.style.backgroundColor = "#d6d6d6"
    btnBlog.style.backgroundColor = "#d6d6d6"
    btnContact.style.backgroundColor = rgbRandom
    console.log(`id: ${id} count: ${count}`)
}