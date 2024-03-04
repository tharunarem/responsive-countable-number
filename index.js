let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let submitel = document.getElementById("submit-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
}

function submit(){
    countEl.textContent=0
    count=0

}