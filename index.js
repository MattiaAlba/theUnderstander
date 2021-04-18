
//hello
const config = require('./config.js');
const Twitter = require('twit');
var randomWords = require('random-words');

const fs = require("fs");   //filesystem

var bot = new Twitter(config);

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
