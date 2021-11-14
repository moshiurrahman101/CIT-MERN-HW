let typeText = document.querySelector(".typeText")

// console.log(typeText.dataset.text)
let count = 0


// cooking typing effect using this function
function typeJS() {
    // console.log(typeText.dataset.text[count])
    
    typeText.innerHTML += typeText.dataset.text[count]
    count++
    if (count > typeText.dataset.text.length) {
        typeText.innerHTML = ""
        count = 0
    }
}


let stop = setInterval(()=>{
    typeJS()
},150)