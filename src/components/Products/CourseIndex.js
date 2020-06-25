import Card from 'react-bootstrap/Card'
import { Link, withRouter } from 'react-router-dom'
import React from 'react'
// import Course1 from '../EachCourse/Course1'

const CourseIndex = () => (
  <div className="cardcontainer">
    <Card className= "card"style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/646/thumb_FullTime_UserExperienceDesignImmersive.jpg" />
      <Card.Body>
        <Card.Title><Link to='/courseone'>User Experience Design Immersive</Link></Card.Title>
        <Card.Text>
          With 11K+ hires, we’ve placed more grads in high-growth, high-pay tech careers than any other program in the world.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className= "card" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/11342/thumb_FullTime_SoftwareEngineeringImmersive.jpg" />
      <Card.Body>
        <Card.Title><Link to='/coursetwo'>Software Engineering Immersive </Link></Card.Title>
        <Card.Text>
          Our award-winning program, expert instructors, dedicated career coaches, and 19K+ hiring partners get grads hired at A-list companies.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className= "card" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/9192/thumb_101_Intro_ProductManagement.jpg" />
      <Card.Body>
        <Card.Title><Link to='/coursethree'>Free Intro to Product Management className</Link></Card.Title>
        <Card.Text>
          In this online workshop you will gain exposure to all the basic elements and responsibilities of performing the role of a product manager within a digital company
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className= "card" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/13832/thumb_Business_Make_Heart_Hand_Tray_Suit.jpg" />
      <Card.Body>
        <Card.Title><Link to='/coursefour'>Design Your Life, Design Your Quarantine: You Must Be Dreaming</Link></Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className= "card" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/14058/thumb_Tech_AI-VR-woman-headset.jpg" />
      <Card.Body>
        <Card.Title><Link to='/coursefive'>What The HTML?!</Link></Card.Title>
        <Card.Text>
          Join us to hear software engineering experts share their insights on the powver of failing & how learning to fail can transform any professional journey.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className= "card" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/669/thumb_PartTime_DigitalMarketing.jpg" />
      <Card.Body>
        <Card.Title><Link to='/coursesix'>Digital Marketing</Link></Card.Title>
        <Card.Text>
          Gain indispensable digital marketing skills in this 10-week evening or 1-week accelerated course, on campus or online.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

)

export default withRouter(CourseIndex)