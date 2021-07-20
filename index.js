// This function alternates the Footers' displays between "none" and "flex" when the buttons are clicked
// It also changes the colors of the "share" button

function shareArticle() {
    let profileFooter = document.getElementById("profile")
    let shareFooter = document.getElementById("share")
    let arrowDiv = document.getElementById("profile-button")
    let arrowImage = document.getElementById("share-arrow")

    if (window.screen.width < 800) {
        if (profileFooter.style.display == "flex") {
            profileFooter.style.display = "none"
            shareFooter.style.display = "flex"
        } else {
            profileFooter.style.display = "flex"
            shareFooter.style.display = "none"
        }        
    } else {
        if (!shareFooter.style.display || shareFooter.style.display == "none") {
            console.log(shareFooter.style.display)

            shareFooter.style.display = "flex"
            
            arrowImage.src = "images/icon-share-white.svg"
            arrowDiv.classList.toggle("profile-button")
            arrowDiv.classList.toggle("share-button")
            
        } else {
            console.log(toString(shareFooter.style.display))

            shareFooter.style.display = "none"

            arrowImage.src = "images/icon-share.svg"
            arrowDiv.classList.toggle("profile-button")
            arrowDiv.classList.toggle("share-button")
        }
    }
}

let profileButton = document.getElementById("profile-button")
let shareButton = document.getElementById("share-button")

profileButton.addEventListener("click", shareArticle)
shareButton.addEventListener("click", shareArticle)