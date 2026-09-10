// FRONT-END (CLIENT) JAVASCRIPT HERE
let username = "Player 1"

// Logout and return to default landing page for not logged in users
const logout = async function( event ) {
    //event.preventDefault()
    console.log("logging out")
    window.location.href = '/'
    //Actually log out from server maybe?
    //not using auth0 right now
}

//
const updateUsername = async function() {
    const newUsername1 = document.querySelector( '#username1' ),
        newUsername2 = document.querySelector( '#username2' )
    if (newUsername1.value != newUsername2.value) {
        newUsername2.setCustomValidity("Your usernames must match!")
    }
    else {
        newUsername2.setCustomValidity("")
        //POST req to change username in server
    }
}

const updatePassword = async function() {
    const password1 = document.querySelector( '#password1' ),
        password2 = document.querySelector( '#password2' )
    if (password1.value != password2.value) {
        password2.setCustomValidity("Your passwords must match!")
    }
    else {
        password2.setCustomValidity("")
        //POST req to change password in server
    }
}

const updateProfilePicture = async function() {
    //select it from a list, not sure how right now though
}

const updateGameScore = async function() {
    const mode = document.querySelector( '#option' ),
        game = document.querySelector( '#game' ),
        score = document.querySelector( '#highscore' ),
        today = new Date().toISOString().slice(0, 10), 
        json = { option: mode.value, game: game.value, highscore: score.value, date: today}

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

const updateShownData = async function() {
    // Run a get after running a post, to see if the page changes
    const response = await fetch( '/docs', {
        method:'GET'
    })
    const text = await response.text()
    const data  = JSON.parse(text)
    let dataToDisplay = ""
    for (let i = 0; i < data.length; i++) {
        dataToDisplay += data[i].game+":"+data[i].highscore+", "
    }``
    // Overwrite the displayed scoretable with the updated version after it returns
    document.getElementById('scoretable').innerHTML = dataToDisplay.replaceAll(/(<[^l][^i][^>])|([^<][^l][^i]>)/g, "")
}

const updateForm = async function() {
    const selection = document.querySelector('input[name="whatToDo"]:checked')
    console.log(selection)
    if (selection != null) {
        if (selection.value === "1") {
            document.getElementById('home').innerHTML = getUsername     
        }
        else if (selection.value === "2") {
            document.getElementById('home').innerHTML = getPassword     
        }
        else if (selection.value === "3") {
            document.getElementById('home').innerHTML = getProfilePicture     
        }
        else if (selection.value === "4") {
            document.getElementById('home').innerHTML = getGames     
        }
        else {
            // Invalid selction for where to go so return to menu
            document.getElementById('home').innerHTML = getMenu
        }
    } 
    else {
        // There was not selection for where to go so return to menu
        document.getElementById('home').innerHTML = getMenu
    }
    
}

const getMenu = (`
    <p>
        Welcome back ${username}!
    </p>
    <ul>
        <legend>What would you like to do</legend>
            <li>
        <label>
            <input id = "whatToDo1" name="whatToDo" value="1" type = "radio">
            Change Username 
        </label>
        </li>
        <li>
        <label>
            <input id = "whatToDo2" name="whatToDo" value="2" type = "radio">
            Change Password
        </label>
        </li>
        <li>
        <label>
            <input id = "whatToDo3" name="whatToDo" value="3" type = "radio">
            Change Profile picture
        </label>
        </li>
        <li>
        <label>
            <input id = "whatToDo4" name="whatToDo" value="4" type = "radio">
            Modify scroes for games
        </label>
        </li>
    </ul>
    <button class="pure-button pure-button-primary" type="button" onclick="updateForm()"> Get Started </button>
`)

const getUsername = (`
    <input type='text' id='username1' value=''placeholder='Please enter a new username'>
    <input type='text' id='username2' value='' placeholder='Please retype your username'>
    <button class="pure-button pure-button-secondary type="button" onclick="updateForm()" >back</button>
    <button class="pure-button pure-button-primary type="button" onclick="updateUsername()" >submit</button>
`)

const getPassword = (`
    <input type='password' id='password1' value=''placeholder='Please enter a new password'>
    <input type='password' id='password2' value='' placeholder='Please retype your password'>
    <button class="pure-button pure-button-secondary type="button" onclick="updateForm()" >back</button>
    <button class="pure-button pure-button-primary type="button" onclick="updatePassword()" >submit</button>
`)

const getProfilePicture = (`
    <p>This is not available with free database size restrictions</p>
    <button class="pure-button pure-button-secondary type="button" onclick="updateForm()" >back</button>
    <button class="pure-button pure-button-primary type="button" onclick="updateProfilePicture()" >submit</button>
`)

const getGames = (`
    <select id='option'>
        <option>Add Score</option>
        <option>Modify Score</option>
        <option>Delete Score</option>
    </select>
    <input type='text' id='game' value=''placeholder='enter what game this score is for'>
    <input type='text' id='highscore' value='' placeholder='enter your score here'>
    <button class="pure-button pure-button-secondary type="button" onclick="updateForm()" >back</button>
    <button class="pure-button pure-button-primary type="button" onclick="updateGameScore()" >submit</button>
`)

window.onload = async function ()  {
    updateShownData()
    updateForm()
}

