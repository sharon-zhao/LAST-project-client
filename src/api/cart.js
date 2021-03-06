import apiUrl from '../apiConfig'
import axios from 'axios'

export const emptyCart = user => {
  return axios({
    url: `${apiUrl}/delete-cart`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const createCourse = user => {
  return axios({
    url: apiUrl + 'add-cart',
    method: 'POST',
    data: {
      cart: this.state.cart
    },
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const getCourse = user => {
  return axios({
    url: `${apiUrl}/my-course`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const createEmptyCart = user => {
  return axios({
    url: apiUrl + '/shopping-cart',
    method: 'POST',
    data: {
      'cart': {
        'carts': [],
        'user': `${user._id}`,
        'totalCost': 0
      }
    },
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
