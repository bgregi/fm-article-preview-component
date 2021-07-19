// referenciar elementos footers
// criar evento onclick no share button
// mudar propriedade display ficar alternando

function shareArticle() {
    let profileFooter = document.getElementById("profile")
    let shareFooter = document.getElementById("share")

    if (profileFooter.style.display == "flex") {
        profileFooter.style.display = "none"
        shareFooter.style.display = "flex"        
    } else {
        profileFooter.style.display = "flex"
        shareFooter.style.display = "none"
    }    

    console.log(profileFooter.style.maxHeight)
}

let profileButton = document.getElementById("profile-button")
let shareButton = document.getElementById("share-button")

profileButton.addEventListener("click", shareArticle)
shareButton.addEventListener("click", shareArticle)