// FRONT-END (CLIENT) JAVASCRIPT HERE
//let ul = null

const login = async function() {
    console.log("ran submit")

    const mode = document.querySelector( '#option' ),
        username = document.querySelector( '#username' ),
        password = document.querySelector( '#password' ),
        json = { username: username.value, password: password.value}

    const response = await fetch( '/login', {
        method:'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify( json ) 
    })

    const text = await response.text()
    const data  = JSON.parse(text)
    let dataToDisplay = ""
    // Log in should not display data but its fine for now
    for (let i = 0; i < data.length; i++) {
        dataToDisplay += data[i]
    }
    // Overwrite the displayed scoretable with the updated version after it returns
    document.getElementById('scoretable').innerHTML = dataToDisplay.replaceAll(/(<[^l][^i][^>])|([^<][^l][^i]>)/g, "")
    window.location.href = '/home.html'
}
