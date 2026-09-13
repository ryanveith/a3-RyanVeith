const login = async function() {
    console.log("ran submit")

    const mode = document.querySelector( '#option' ),
        username = document.querySelector( '#username' ),
        password = document.querySelector( '#password' ),
        json = {mode: mode.value, username: username.value, password: password.value}

    const response = await fetch( '/login', {
        method:'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify( json ) 
    })

    const text = await response.text()

    // If responsw was 200 OK redirect, if not show given error message
    const errorMessage = document.querySelector( '#error' )
    console.log("status", response.status)
    if (response.status == 200) {
        // As far as I can tell hidden does not need a value it just needs to exist as an attribute
        errorMessage.setAttribute("hidden", "")
        errorMessage.innerText = ""
        console.log("here")
        window.location.href = '/home.html'
    }
    else {  
        errorMessage.removeAttribute("hidden")
        errorMessage.innerText = text
    }
}
