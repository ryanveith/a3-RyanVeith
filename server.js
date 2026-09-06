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
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);

// Express server stuff
const express = require( 'express' ),
      app = express()

// Next is used to say this funciton is done, this is important since with async returning might not be finished
const logger = (req,res,next) => {
  console.log( 'url:', req.url )
  next()
}

app.use( logger )

app.use( express.static('public') )

app.get( '/', ( req, res ) => res.send( 'Hello World!' ) )

app.listen( process.env.PORT || 3000 )