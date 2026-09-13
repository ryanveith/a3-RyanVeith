let username = "Player 1"

// Logout and return to default landing page for not logged in users
const logout = async function( event ) {
    const response = await fetch( '/submit', {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( "" ) 
    })
    window.location.href = '/'
}

const updateUsername = async function() {
    const newUsername1 = document.querySelector( '#username1' ),
        newUsername2 = document.querySelector( '#username2' )
    if (newUsername1.value != newUsername2.value) {
        newUsername2.setCustomValidity("Your usernames must match!")
    }
    else {
        newUsername2.setCustomValidity("")
        //POST req to change username in server
        const response = await fetch( '/submit', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {option:'Change Username', newUsername:newUsername1.value} ) 
        })
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
        const response = await fetch( '/submit', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {option:'Change Password', newPassword:password1.value} ) 
        })
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

    // Do something with the response from POST
    const data = await response.text()
    // checking if data is not an error message would be ideal

    updateShownData()    
}

const updateShownData = async function() {
    // Run a get after running a post, to see if the page changes
    const response = await fetch( '/docs', {
        method:'GET'
    })
    const text = await response.text()
    // This specifically still needs to be parsed
    const data = JSON.parse(text)
    let dataToDisplay = ""
    // Data is sent back as an array with all documents 
    for (let i = 0; i < data.length; i++) {
        if (data[i].game != null) {
            dataToDisplay += "<li>"+(data[i].game+": "+data[i].highscore).replaceAll(/(<|>)/g, "")+"</li>"
        }
        //one of the elemnts sent back should contain the username so update that 
        else if (data[i].username != null) {
            username = data[i].username
        }
    }
    // Overwrite the displayed scoretable with the updated version after it returns
    document.getElementById('scoretable').innerHTML = dataToDisplay
    // Also update player name
    document.getElementById('welcome').innerText = `Welcome back ${username}! What would you like to do?`
}

const updateForm = async function() {
    const selection = document.querySelector('input[name="whatToDo"]:checked')
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
    <ul>
        <li>
        <label>
            <input id = "whatToDo1" name="whatToDo" value="1" type = "radio">
            Change your Nickname 
        </label>
        </li>
        <li>
        <label>
            <input id = "whatToDo2" name="whatToDo" value="2" type = "radio">
            Change your Password
        </label>
        </li>
        <li>
        <label>
            <input id = "whatToDo3" name="whatToDo" value="3" type = "radio">
            Change your Profile picture
        </label>
        </li>
        <li>
        <label>
            <input id = "whatToDo4" name="whatToDo" value="4" type = "radio" checked>
            Add data about Games you have played
        </label>
        </li>
    </ul>
    <button class="pure-button pure-button-primary" type="button" onclick="updateForm()"> Get Started </button>
`)

const getUsername = (`
     <label for="username1"> Enter a Nickname: </label>
    <input type='text' id='username1' value=''placeholder='Please enter a new username'>
     <label for="username2"> Confirm your Nickname: </label>
    <input type='text' id='username2' value='' placeholder='Please retype your username'>
    <button class="pure-button pure-button-secondary type="button" onclick="updateForm()" >back</button>
    <button class="pure-button pure-button-primary type="button" onclick="updateUsername()" >submit</button>
`)

const getPassword = (`
    <label for="password1"> Enter a New Password: </label>
    <input type='password' id='password1' value=''placeholder='Please enter a new password'>
    <label for="password2"> Confirm your Password: </label>
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
    <label for="option"> Select Add/Modify/Delete Score: </label>
    <select id='option'>
        <option>Add Score</option>
        <option>Modify Score</option>
        <option>Delete Score</option>
    </select>
    <label for="game"> Enter Name of Game: </label>
    <input type='text' id='game' value=''placeholder='enter what game this score is for'>
    <label for="highscore"> Enter your Highscore: </label>
    <input type='text' id='highscore' value='' placeholder='enter your score here'>
    <button class="pure-button pure-button-secondary type="button" onclick="updateForm()" >back</button>
    <button class="pure-button pure-button-primary type="button" onclick="updateGameScore()" >submit</button>
`)

window.onload = async function ()  {
    updateForm()
}

// I was trying hard to get verything to just work in window.onload but updateShownData() has to fetch the data
// And they while I got it to work in incognito when initially doing lighthouse tests
// Did not seem consistent
document.addEventListener("DOMContentLoaded", () => {
    updateShownData()
});
