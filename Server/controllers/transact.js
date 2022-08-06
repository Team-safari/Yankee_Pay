const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
const PaymentSchema = require('../model/paymentSchema')
const axios = require('axios')
const stripe = require("stripe")('sk_test_51LTmH2HKDFx0rty5D8k1K9teO4maftBr5sqjvBYy8lDkfswmowHH5chHeNrCyn0nFVzqQp37h66oTaSjkNipGYwF00LQawJsL2');


//User endpoints

const getPayment = asyncWrapper(async (req, res)=>{
const {amount, currency} = req.body;
console.log(amount)

const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });
 if(!paymentIntent){
    return next(createCustomError(`payment not  suucessful` , 404))
 }
//    const pay = await PaymentSchema.create(amount, currency, walletAddress, description )
//    res.status(200).send({paymentIntent})
if(res.status(200)){
    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
      });
    }
})  

//Wallet balance
const getBalance = asyncWrapper( async ()=>{
  const {user_email, user_token, user_type, channel_code} = req.body
  const balance = await axios({
    method: 'post', //you can set what request you want to be
    url: 'https://rgw.k8s.apis.ng/centric-platforms/uat/GetBalance',
    data: {id: varID},
    headers: {
      ClientId: process.env.CLIENT_ID
    }
  })
})



//Admin endpoints






module.exports = {getPayment}