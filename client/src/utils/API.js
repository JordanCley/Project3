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
