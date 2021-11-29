const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fla38.mongodb.net/doomcar?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function dbRun() {
  try {
    await client.connect();
    const db = client.db("doomcar");
    const cars = db.collection("cars");
    const orders = db.collection("orders");
    const reviews = db.collection("reviews");
    const users = db.collection("users");

    // Add Cars
    app.post("/car", async (req, res) => {
      const data = req.body;
      const result = await cars.insertOne(data);
      res.send(result);
    });

    // Get Cars with limit
    app.get("/cars", async (req, res) => {
      const limit = req.query.limit;
      let allCars = [];
      if (limit) {
        allCars = await cars.find({}).limit(6).toArray();
      } else {
        allCars = await cars.find({}).toArray();
      }
      res.send(allCars);
    });

    // Delete a Car
    app.delete("/car/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await cars.deleteOne(query);
      if (result.deletedCount === 1) {
        res.send("Successfully deleted ");
      } else {
        res.send("No documents matched the query. Deleted 0 documents.");
      }
    });

    //Get All Orders
    app.get("/orders", async (req, res) => {
      const result = await orders.find({}).toArray();
      res.json(result);
    });

    // Get Orders by email
    app.get("/orders/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await orders.find(query).toArray();
      res.json(result);
    });

    // insert an Order
    app.post("/order", async (req, res) => {
      const data = req.body;

      const result = await orders.insertOne(data);
      res.send(result);
    });

    // Delete an Order
    app.delete("/order/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await orders.deleteOne(query);
      if (result.deletedCount === 1) {
        res.send("Successfully deleted ");
      } else {
        res.send("No documents matched the query. Deleted 0 documents.");
      }
    });

    // Update Status
    app.put("/status-update/:id", async (req, res) => {
      const id = req.params.id;
      const status = req.query.status;
      const filter = { _id: ObjectId(id) };
      const updateDoc = { $set: { status: status } };
      const result = await orders.updateOne(filter, updateDoc);
      res.json(result);
    });

    // Users
    app.post("/user", async (req, res) => {
      const data = req.body;
      const result = await users.insertOne(data);
      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email };
      const result = await users.findOne(filter);
      res.send(result);
    });

    app.put("/user/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
      const updateDoc = { $set: { isAdmin: true, role: "admin" } };
      const result = await users.updateOne(filter, updateDoc);
      res.json(result);
    });

    // Get Reviews
    app.get("/reviews", async (req, res) => {
      const result = await reviews.find({}).toArray();
      res.send(result);
    });

    // Add Review
    app.post("/review", async (req, res) => {
      const data = req.body;
      const result = await reviews.insertOne(data);
      res.send(result);
    });

    // Finally
  } finally {
    //   await client.close()
  }
}

dbRun().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
