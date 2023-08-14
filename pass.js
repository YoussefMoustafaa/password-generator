const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const generateBtn = document.getElementById("generate-btn")
const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
const firstAlert = document.querySelector(".first")
const secondAlert = document.querySelector(".second")

let size = characters.length

generateBtn.addEventListener("click", function() {
    pass1.textContent = renderPass()
    pass2.textContent = renderPass()
})

pass1.addEventListener("click", function() {
    copy(pass1)
    firstAlert.textContent = "copied!"
})

pass1.addEventListener("mouseover", function() {
    firstAlert.textContent = "copy"
})

pass2.addEventListener("mouseover", function() {
    secondAlert.textContent = "copy"
})

pass2.addEventListener("click", function() {
    copy(pass2)
    secondAlert.textContent = "copied!"
})

function copy(pass) {
    navigator.clipboard.writeText(pass.textContent)
}

function renderPass() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        let index = Math.floor(Math.random() * size)
        password += characters[index]
    }
    return password
}
