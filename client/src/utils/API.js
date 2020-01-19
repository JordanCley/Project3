import axios from "axios";
export default {
  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/user/${id}`);
  },
  // getting products/app items 
  getProducts: ()=> {
    return axios.get('/api/products');
  },
  createOrder: (items, tableNum, total, gratuity, tax, grandTotal)=> {
    return axios.post('/api/order/new', {
      items: items,
      tableNum: tableNum,
      total: total,
      gratuity: gratuity,
      tax: tax,
      grandTotal: grandTotal
    });
  },
  // sign up a user to our service
  signUpUser: (firstName, lastName, email, password) => {
    return axios.post("api/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
  }
};
