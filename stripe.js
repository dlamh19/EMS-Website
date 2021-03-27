try {
    const stripe = require('stripe')('sk_test_51IZhX1HhDTSTT5EipQXox3qZsGkDG3Kg9pIJ3hSDrffmD9jP5tspf8071CYKPfANlDkil3mtjtnWO944MEN3N0LG00GapPS6kj');
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1477, // $14.77, an easily identifiable amount
      currency: 'usd',
    });
    console.log('Worked! ', paymentIntent.id);
  } catch(err) {
    console.log('Error! ', err.message);
  }
  