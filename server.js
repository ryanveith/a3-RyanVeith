require("dotenv").config()
// Express const
const express = require( 'express' ),
    favicon = require( 'serve-favicon' ),
    path = require( 'path' ),
    app = express(),
    user = "" 

console.log(path.join(__dirname, 'public', 'images', 'favicon.ico'))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))


// Mongo DB stuff
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MY_USERNAME}:${process.env.PASSWORD}@${process.env.DATABASE_URL}/?appName=CS4241-Webware`; 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        collection = await client.db("datatest").collection("test")
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
        // route to get all docs
        app.get("/docs", async (req, res) => {
            if (collection !== null) {
                const docs = await collection.find({}).toArray()
                res.json( docs )
            }
            else {
                res.json({})
            }
        })

        //normal routes
        // I mean really both are already being served as static files, but here is some code anyways
        app.get( '/', ( req, res ) => {
            res.writeHead( 200, { 'Content-Type': 'application/json' })
            res.end( JSON.stringify( 'Hello World!' ) )
        } )
        app.get( '/home.html', async ( req, res ) => {
            if (collection !== null) {
                const docs = await collection.find({}).toArray()
            }
            res.writeHead( 200, { 'Content-Type': 'application/json' })
            res.end( JSON.stringify( docs ) )
        } )

        app.post( '/submit', async (req, res) => {
            console.log(req.body)
            if (req.body.option == "Change Username") {
                //rename collection to new username
                // db.collection.renameCollection()
            }
            else if (req.body.option == "Change Password") {
                //change password stored in collection
            }
            else if (req.body.option == "Change Profile Picture") {
                //change picture stored in collection
            }
            else if (req.body.option == "Add Score") {
                //add game score pair to collection
                const result = await collection.insertOne({
                    "game": req.body.game, "highscore": req.body.highscore
                })
                // return result of this call to db
                res.writeHead( 200, { 'Content-Type': 'application/json' })
                res.end( JSON.stringify( result ) )
            }
            else if (req.body.option == "Modify Score") {
                //modify score for game
                const result = await collection.updateOne({
                    "game":req.body.game}, {
                    $set:{ 
                        "highscore":req.body.highscore
                    }
                })
                // return result of this call to db
                res.writeHead( 200, { 'Content-Type': 'application/json' })
                res.end( JSON.stringify( result ) )
            }
            else if (req.body.option == "Delete Score") {
                //remove game and score from collection
                const result = await collection.deleteOne({ 
                    "game":req.body.game
                })
                // return result of this call to db
                res.writeHead( 200, { 'Content-Type': 'application/json' })
                res.end( JSON.stringify( result ) )    
            }
        })

        app.post( '/login', (req, res) => {
            console.log("log in attempet")
            console.log(req.body)
            res.writeHead( 200, { 'Content-Type': 'application/json' })
            res.end( JSON.stringify( "Hello world" ) )
        })

    } finally {
        // Ensures that the client will close when you finish/error
        // But this happens when you stop running the server anyways so just keep it open rather then reopen it for every call
        //await client.close();
    }
}

app.use( express.static('public') )

app.use( express.json() )

run().catch(console.dir);

app.listen( process.env.PORT || 3000 )