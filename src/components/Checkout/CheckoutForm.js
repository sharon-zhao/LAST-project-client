import React, { useState } from 'react'
import { createCardToken, addCardToken, sendCharge } from '../../api/stripe'
// import { Link } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import Card from 'react-bootstrap/Card'

const StripeCheckoutForm = ({ shoppingCart, msgAlert, user, customer }) => {
  const [show, setShow] = useState(false)
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')
  // const [redirect, setRedirect] = useState(false)
  // const [cardToken, setCardToken] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChangeNumber = event => {
    setNumber(event.target.value)
  }
  const handleChangeMonth = event => {
    setMonth(event.target.value)
  }
  const handleChangeYear = event => {
    setYear(event.target.value)
  }
  const handleChangeCvc = event => {
    setCvc(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createCardToken(number, month, year, cvc)
      .then(data => {
        const token = data.data.card.id
        return token
      })
      .then(token => {
        addCardToken(token, customer)
      })
      .then(() => handleShow())
      .catch(() => {
        msgAlert({
          heading: 'Checkout Failed',
          message: messages.checkoutFailure,
          variant: 'danger'
        })
      })
  }

  const handlePurchaseCompletion = () => {
    sendCharge(shoppingCart.totalCost, customer)
      .then(res => {
        console.log(res)
      })
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title">Review Your Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePurchaseCompletion}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Form onSubmit={handleSubmit} className="container">
        <div>
          <Form.Group className="col-12 formText row">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              required
              className="creditForm"
              type="text"
              name="number"
              value={number}
              maxLength="16"
              placeholder="0000-0000-0000-0000"
              onChange={handleChangeNumber}
            />
          </Form.Group>
          <Form.Group className="row formText">
            <div className="col-3">
              <Form.Label>Month</Form.Label>
              <Form.Control
                required
                className="creditForm"
                name="month"
                value={month}
                maxLength="2"
                type="text"
                placeholder="00"
                onChange={handleChangeMonth}
              />
            </div>
            <div className="col-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                required
                className="creditForm"
                name="year"
                value={year}
                type="text"
                maxLength="4"
                placeholder="0000"
                onChange={handleChangeYear}
              />
            </div>
            <div className="col-3 formDiv">
              <Form.Label>Cvc Number</Form.Label>
              <Form.Control
                className="creditForm"
                required
                name="cvc"
                value={cvc}
                type="text"
                maxLength="4"
                placeholder="000"
                onChange={handleChangeCvc}
              />
            </div>
          </Form.Group>
        </div>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  )
}
// else {
//   return (
//     <Redirect to='/products' />
//   )
// }

export default StripeCheckoutForm
