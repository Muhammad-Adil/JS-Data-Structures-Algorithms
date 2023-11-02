const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yoga-app.gpprp5e.mongodb.net/?retryWrites=true&w=majority&appName=yoga-app`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Create DB and collections
    const database = client.db("yoga-app");
    const userCollection = database.collection("users");
    const classesCollection = database.collection("classes");
    const cartCollection = database.collection("cart");
    const enrolledCollection = database.collection("enrolled");
    const paymentCollection = database.collection("payments");
    const appliedCollection = database.collection("applied");
    client.connect();

    //
    //

    // ! CLASSES ROUTES
    // verifyJWT,
    // verifyInstructor,
    app.post("/new-class", async (req, res) => {
      const newClass = req.body;
      newClass.availableSeats = parseInt(newClass.availableSeats);
      const result = await classesCollection.insertOne(newClass);
      res.send(result);
    });

    // GET ALL CLASSES
    app.get("/classes", async (req, res) => {
      console.log("classes", classes);
      const query = { status: "approved" };
      const result = await classesCollection.find(query).toArray();
      res.send(result);
    });

    // GET ALL CLASSES ADDED BY INSTRUCTOR
    app.get("/classes/:email", async (req, res) => {
      const email = req.params.email;
      const query = { instructorEmail: email };
      const result = await classesCollection.find(query).toArray();
      res.send(result);
    });

    //
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example }) app listening on port ${port}`);
});
