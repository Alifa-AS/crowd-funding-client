const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.CF_USER}:${process.env.CF_PASS}@cluster0.jhhpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

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
// Connect the client to the server (optional starting in v4.7)
await client.connect();

const campaignCollection = client.db('CampaignDB').collection('campaign');
const donationCollection = client.db('CampaignDB').collection('donation');
const userCollection = client.db('CampaignDB').collection('users');

// get ALL campaigns
app.get('/campaign', async (req, res) => {
const cursor = campaignCollection.find();
const result = await cursor.toArray();
res.send(result);
});

// add a new campaign
app.post('/campaign', async (req, res) => {
const newCampaign = req.body;
newCampaign.created_by = req.body.email;
console.log(newCampaign);
try {
const result = await campaignCollection.insertOne(newCampaign);
res.send(result);
} catch (error) {
console.error('Error adding campaign:', error);
res.status(500).send({ error: 'Failed to add campaign' });
}
});

// get my campaigns by email
app.get('/my-campaigns', async (req, res) => {
const email = req.query.email;
if (!email) {
return res.status(400).json({ error: 'Email is required!' });
}
const query = { created_by: email };
const result = await campaignCollection.find(query).toArray();
res.send(result);
});

// get the details of a specific campaign
app.get('/details/:id', async (req, res) => {
const id = req.params.id;
const query = { _id: new ObjectId(id) };
const result = await campaignCollection.findOne(query);
res.send(result);
});

// active campaigns
app.get('/activeCampaigns', async (req, res) => {
const CurrentDate = new Date();
const campaigns = await campaignCollection
.find({ deadline: { $gte: CurrentDate } })
.limit(6)
.toArray();
console.log("active campaigns:", campaigns, CurrentDate);
res.send(campaigns);
});

// store donation data
app.post('/donate', async (req, res) => {
const donationData = req.body;
console.log(donationData);
const result = await donationCollection.insertOne(donationData);
res.send(result);
});

// users related APIs
app.get('/users', async (req, res) => {
const cursor = userCollection.find();
const result = await cursor.toArray();
res.send(result);
});

app.post('/users', async (req, res) => {
const newUser = req.body;
console.log('creating new user', newUser);
const result = await userCollection.insertOne(newUser);
res.send(result);
});

// users patch
app.patch('/users', async (req, res) => {
const email = req.body.email;
console.log("Received Email for Update:", email);
const filter = { email };
const updatedDoc = {
$set: {
lastTime: req.body?.lastLoginTime,
}
};

const result = await userCollection.updateOne(filter, updatedDoc);
console.log("Update Result:", result);
res.send(result);
});

// Send a ping to confirm a successful connection
await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
// Ensures that the client will close when you finish/error
// await client.close();
}
}
run().catch(console.dir);

app.get('/', (req, res) => {
res.send('crowd-funding server is running');
});

app.listen(port, () => {
console.log(`crowd-funding server is running port: ${port}`);
});
