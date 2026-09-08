require("dotenv").config()
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
        })

        //other routes
        app.post( '/add', async (req,res) => {
            const result = await collection.insertOne( req.body )
            res.json( result )
        })

        // assumes req.body takes form { _id:5d91fb30f3f81b282d7be0dd } etc.
        app.post( '/remove', async (req,res) => {
            const result = await collection.deleteOne({ 
                _id:new ObjectId( req.body._id ) 
            })    
            res.json( result )
        })

        app.post( '/update', async (req,res) => {
            const result = await collection.updateOne(
                { _id: new ObjectId( req.body._id ) },
                { $set:{ name:req.body.name } }
            )
        res.json( result )
})

    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);


// Express server stuff
const express = require( 'express' ),
    app = express()

app.use( express.static('public') )

app.use( express.json() )

// I mean really both are already being served as static files, but here is some code anyways
app.get( '/', ( req, res ) => {
    res.writeHead( 200, { 'Content-Type': 'application/json' })
    res.end( JSON.stringify( 'Hello World!' ) )
    } )
app.get( '/home.html', ( req, res ) => {
    res.writeHead( 200, { 'Content-Type': 'application/json' })
    res.end( JSON.stringify( 'Hi Planet!' ) )
} )

app.post( '/submit', (req, res) => {
    console.log(req.body)
    res.writeHead( 200, { 'Content-Type': 'application/json' })
    res.end( JSON.stringify( "Hello world" ) )
})

app.post( '/login', (req, res) => {
    console.log("log in attempet")
    console.log(req.body)
    res.writeHead( 200, { 'Content-Type': 'application/json' })
    res.end( JSON.stringify( "Hello world" ) )
})

app.listen( process.env.PORT || 3000 )