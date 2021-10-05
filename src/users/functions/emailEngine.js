
require('dotenv') 
const sgMail = require('@sendgrid/mail')


function SendEmail(email){
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: email, // Change to your recipient
  from:  'nicolasbakanowski@gmail.com', // Change to your verified sender
  subject: 'WELCOME TO DISNEY',
  text: 'THIS IS A WELCOME FOR YOUR REGISTER',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}
module.exports = SendEmail