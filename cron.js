const cron = require('node-cron');
const nodemailer = require('nodemailer');
const User = require('./models/user');
const config = require('./config/config');
const models = require("./models");
const { Sequelize } = require("sequelize");


const sendmailallusers = () =>{
    try{
        cron.schedule('* * * * * *',async function() {
            const userData = await User.findAll();
            console.log("hey");
            if(userData.length > 0){
                console.log("hello");
                var emails = [];
                userData.map((key) =>{
                    emails.push(key.email);
                });

                console.log(emails);
            }
});
    }catch (error){
        console.log(error.message);
    }
}
  

module.exports = {
    sendmailallusers
}