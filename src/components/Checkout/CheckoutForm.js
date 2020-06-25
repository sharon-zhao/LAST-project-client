import React from 'react'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe } from '@stripe/react-stripe-js'
// import axios from 'axios'
// import { payCourse } from '../../api/charge'

const stripePromise = loadStripe('pk_test_51GwtbWItoru9tJqqxGjpCu9YnOadmUXoLHvccDJAfmW00XwTKz3GCNqumtCC7rZC3R3VxtGdEne6M1ypGG2kxbN100QM59yfj2')

const CheckoutForm = ({ success }) => {
  const stripe = useStripe()
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 0 }}>
    <h2>price:$</h2>
    <CardElement style={{ height: '30px' }}/>
    <Button type="submit" disabled={!stripe}>
      pay
    </Button>
  </form>
}

const StripeCheckoutForm = (props) => {
  console.log(props.state)
  const [status, setStatus] = React.useState('ready')
  if (status === 'success') {
    return <div>congrats on your payment</div>
  }
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm success={() => {
        setStatus('success')
      }} />
    </Elements>
  )
}
export default StripeCheckoutForm
