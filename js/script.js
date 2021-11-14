let flexiblebar = document.querySelector(".flexiblebar")
let progressCounter = document.querySelector(".progressCounter")

let count = 0
let delayTime = (1000 * flexiblebar.dataset.delay) / flexiblebar.dataset.percent

flexiblebar.style.background = flexiblebar.dataset.bg

function progressBar() {
    count++
    flexiblebar.style.width = `${count}%`
    progressCounter.innerHTML = `${count}%`
    if (count == flexiblebar.dataset.percent) {
        clearInterval(stop)
    }
}

let stop = setInterval(()=>{
    progressBar()
},delayTime)

