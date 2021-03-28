import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ":-webkit-autofill": { color: '#fc0883'},
            '::placeholder': {color: '#87bbfd'}
        },
        invalid: {
            iconColor: 'ffc7ee',
            color: 'ffc7ee'
        }
    }
}


export default function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements=useElements();

    const handleSumbit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
    

        if (!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post('https://localhost:4000/payment', {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log('Successful Payment!')
                    setSuccess(true)
                }
            } catch (error) {
                console.log("Error", error);
            }
        } else {
            console.log(error)
        }

    }

    return (
        <>
            {!success ?
            <form onSubmit={handleSumbit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button>Donate</button>
            </form>
            :
            <div>
                <h2>Thank you for the donation! You are helping save lives :)</h2>
            </div>
            }
        </>
    )
}