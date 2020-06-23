import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const CourseOne = ({ user, msgAlerts }) => {
  const addToCart = (event) => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/add-course`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: {
        title: 'UX Design Immersive: Boston',
        price: 200
      }
    })
      .then(res => {
        console.log(res)
      })
  }
  return (
    <div>
      <h2 className="course1">UX Design Immersive: Boston</h2>
      <h4>With 11K+ hires, we’ve placed more grads in high-growth, high-pay tech careers than any other program in the world.</h4>
      <h5>Learn Universal Skills to Solve Complex User Problems</h5>
      <p>
      Launch a future-proof career designing digital experiences that power revenue, user loyalty, and product success.
      </p>
      <h5>Build a Professional-Grade Portfolio</h5>
      <p>
      Distinguish yourself as a designer, compiling a portfolio to showcase solo, group, and client projects to employers.
      </p>
      {user && <Button onClick={addToCart}>Add To Cart</Button>}
    </div>
  )
}

export default withRouter(CourseOne)
