import React from 'react'
import { withRouter, Link } from 'react-router-dom'
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
        return res
      })
  }
  return (
    <div>
      <div className="course1">
        <h2 className="head">UX Design Immersive: Boston</h2>
        <p className="ptag">Your best course for career transformation. This full-time data science bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.

        This course is also offered in a Remote format.</p>
      </div>
      <h4 className="subtitle">With 11K+ hires, we’ve placed more grads in high-growth, high-pay tech careers than any other program in the world.</h4>
      <h5>Learn Universal Skills to Solve Complex User Problems</h5>
      <p>
      Launch a future-proof career designing digital experiences that power revenue, user loyalty, and product success.
      </p>
      <h5>Build a Professional-Grade Portfolio</h5>
      <p>
      Distinguish yourself as a designer, compiling a portfolio to showcase solo, group, and client projects to employers.
      </p>
      {user && <Button onClick={addToCart} >Add To Cart</Button>}
      {user && <Link to={'/applications'}><Button className="moveRight">Apply</Button></Link>}
    </div>
  )
}

export default withRouter(CourseOne)
