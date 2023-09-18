const formDiv = document.getElementById("form-facade-script")

const runFile = (e) => {
    successMessage = document.getElementById("ff-success")
    footer = document.getElementsByClassName("footer")
    submitButton = document.getElementsByClassName("btn-primary")
    form = document.getElementsByClassName("ff-form")

    linkHome = document.createElement("a")
    linkHome.innerText = "Go back home"
    linkHome.href = "index.html"
    linkHome.className = "button-link"

    button = document.createElement("div")
    button.className = "button"
    button.appendChild(linkHome)

    if (successMessage) {
        footer[0].className = "footer footer-success"

        form[0].style.color = "var(--black-color)"
        form[0].style.textAlign = "center"
        form[0].style.background = "none"

        form[0].appendChild(button)
        console.log("Found success message! Success!")
    } else {
        setTimeout(runFile, 1000)
    }
}

formDiv.onload = runFile()



