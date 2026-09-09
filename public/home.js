// FRONT-END (CLIENT) JAVASCRIPT HERE
//let ul = null

const customSubmit = async function() {
    const mode = document.querySelector( '#option' ),
        username = document.querySelector( '#username' ),
        score = document.querySelector( '#highscore' ),
        today = new Date().toISOString().slice(0, 10), 
        json = { option: mode.value, username: username.value, highscore: score.value, date: today}

    const response = await fetch( '/submit', {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( json ) 
    })

    // Do something with     the response from POST
    const text = await response.text()
    const data  = JSON.parse(text)
    // checking if data is not an error message woudl be ideal

    updateShownData()    
}

const logout = async function( event ) {
    //event.preventDefault()
    console.log("logging out")
    window.location.href = '/'
    
}

const updateShownData = async function() {
    // Run a get after running a post, to see if the page changes
    const response = await fetch( '/docs', {
        method:'GET'
    })
    const text = await response.text()
    const data  = JSON.parse(text)
    let dataToDisplay = ""
    for (let i = 0; i < data.length; i++) {
        dataToDisplay += data[i].username+":"+data[i].highscore+", "
    }
    // Overwrite the displayed scoretable with the updated version after it returns
    document.getElementById('scoretable').innerHTML = dataToDisplay.replaceAll(/(<[^l][^i][^>])|([^<][^l][^i]>)/g, "")
}


window.onload = async function ()  {
    updateShownData()
}

