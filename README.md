# GA Boston - Client
This application allows users to view the course, apply and buy the course.

## Planning Story
This project is a challenge by using the third part api. It is a simple version of General Assembly Boston, I always use it so I am wondering if I can build one buy using all the knowledge learned.

I am not clear about the logic of adding courses to cart, I cannot put all the information in to the cart, so I create a new version, but I have to add each course information to call the api, it's repetitive.

For the checkout part, I need to delete the information in the previous cart, this is different from deleteOne we used before, I tried deleteMany() and remove() but they are not work. At last, I use loop to delete each element in the array, It's not good but can fix the problem.

## User Stories:
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to view all the course of GA.
- As a signed in user, I would like to be able to add the courses I want.
- As a signed in user, I would like to see all my course in cart.
- As a signed in user, I would like to checkout my course.

## technologies Used

- JavaScript
- HTML
- CSS
- CSS Sass
- ReactJS
- Ajax (Axios)
- Bootstrap

## Wireframe and ERD
Entity Relationship Diagrams:
Resources:
  1. User
  2. Course
  3. Application

### Unsolved Problems/Future Updates
- Combine the same content in the cart to show as number increase.
