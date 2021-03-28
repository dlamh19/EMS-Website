const express = require('express')
const app = express()
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.post('/payment', cors(), (req, res) => {
    let {amount, id} = req.body
    try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: 'USD',
          description: 'Raritan Valley Regional EMS Donation',
          payment_method_types: id,
          confirm: true
        })
        console.log("Payment", paymentIntent)
        res.json({
            message: "Payment Successful!",
            success: true
        })
    } catch (error) {
        console.log('Error', error)
        res.json({
            message: "Payment Failed!",
            success: false
        })
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is listening on port 4000')
})
