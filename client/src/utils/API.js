import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (firstName, lastName, username, email, password) => {
    return axios.post('api/signup', {firstName: firstName, lastName: lastName ,username: username, email: email, password: password});
  }
};
