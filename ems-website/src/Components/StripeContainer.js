import React from 'react';
import PaymentForm from './PaymentForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import './styles.css'

const PUBLIC_KEY = 'pk_test_51IZhX1HhDTSTT5EinqqnCPUvj1FfnXdWuSSKwlVVV6jrcYk3kwtFoMKs5PDskEpmE6GD8LwlqX4LToc9XvuPy8br002U0LuYmF'

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}