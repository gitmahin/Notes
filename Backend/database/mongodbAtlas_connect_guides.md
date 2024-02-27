# Connect your App with MongoDB Atlas. Cloud Database

## Get Registered

https://www.mongodb.com/atlas/database

### 1. Create a new project

### 2. Create a deployment (Cluster)
![screenshot1](<img/Screenshot (21).png>)

### 3. Create a Database with **USERNAME** and **PASSWORD**
![screenshot2](<img/Screenshot (22).png>)

### 4. Connect with the Cluster
![screenshot3](<img/Screenshot (23).png>)

## Network Access `P.S.1`

Delete **My IP Address** and create a new **IP Address** with *Allow access from anywhere*

![screenshot4](<img/Screenshot (24).png>)

![screenshot5](<img/Screenshot (25).png>)

## Database Access `P.S.2`

Edit the user role by set to **"Read and write to any database"**

![alt text](<img/Screenshot (26).png>)

## Problems that every beginner faced

- Database connection failed in server.

**How to solve this problem?**

- Follow the **Database Access** `P.S.1`
- Follow the **Network Access** `P.S.2`

## Now, let's connect the database to the server

**server.js**

```js
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

// Add your connection string.
// NOTE: In production, we use .env file to protect our database connection String
const DB = 'mongodb+srv://atlasdata:atlasdata2222@cluster0.n70bxzt.mongodb.net/?retryWrites=true&w=majority'

// Connect with DB
mongoose.connect(DB).then(()=>{
    console.log('Database Connected Successfully')
}).catch((error) =>{
    console.log('Databasae Connection Failed!')
});

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log(`server is listening on ${port}`) 
})
```

**Output:**

```
> server@1.0.0 start
> nodemon server.js 

[nodemon] 3.0.2
[nodemon] to restart at any time
[nodemon] watching path(s): *.*
[nodemon] watching extensions: j
[nodemon] starting `node server.
server is listening on 3000
Database Connected Successfully
```