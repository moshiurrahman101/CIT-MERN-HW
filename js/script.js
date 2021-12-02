let imageButton = document.querySelectorAll('.imageButton')
let imageButtonArray = Array.from(imageButton)
let closeButton = document.querySelector('.closeButton')
let detailsView = document.querySelector('.detailsView')
let imageBox = document.querySelector('.imageBox')


imageButtonArray.map((button)=>{
    button.addEventListener("click", ()=>{

        //set the image location
        let buttonId = button.dataset.id
        let fileLocation = `./images/${buttonId}.jpg`
        
        detailsView.classList.add("show")

        let viewCode = `<img src="${fileLocation}" alt="Image details" class="detailsViewImage" />`

        imageBox.innerHTML += viewCode

        
    })
})

closeButton.addEventListener("click", () => {
    detailsView.classList.remove("show")
    imageBox.innerHTML = ""

})


