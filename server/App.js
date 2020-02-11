const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const app = express();
const mongoose = require('mongoose');   
const cors = require('cors');
mongoose.connect('mongodb+srv://mohak:mmgmohak@cluster0-ppo7e.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }).catch(function (reason) {
        console.log('Unable to connect to the mongodb instance. Error: ', reason);
    });

mongoose.connection.once('open',()=>{
    console.log("connection established");
})

app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});