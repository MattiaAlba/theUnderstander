
//hello
const Twitter = require('twit');
var randomWords = require('random-words');

const fs = require("fs");   //filesystem

var bot = new Twitter({
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
        access_token: ACCESS_TOKEN,
        access_token_secret: ACCESS_TOKEN_SECRET,
    }
);

var tweet = {status: 'Understand the concept of ' + randomWords()}


if(process.argv[2]){
    console.log("***Custom message argv 2*** = " + process.argv[2]);
    bot.post('statuses/update', {status: 'Understand the concept of ' + process.argv[2]}, error);
}
else{
    bot.post('statuses/update', tweet,  error);
}

function error(err, data, res){
    if (err)
        console.log("BAD", data)
    else
        console.log("GOOD")
}
