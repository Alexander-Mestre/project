const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) =>{
    MongoClient.connect(
        'mongodb+srv://alexandermestre:Barcelona123@instance1project1.ytlxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
        .then(result => {
            console.log('Connected');
            callback();
        })
        .catch(err =>{
            console.log(err);
        })
};

module.exports = mongoConnect;
