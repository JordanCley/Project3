import axios from "axios";
export default {
  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/user/${id}`);
  },
<<<<<<< HEAD
  // getting products/app items
  getProducts: () => {
    return axios.get("/api/products");
=======
  // getting products/app items 
  getProducts: ()=> {
    return axios.get("/api/products");
  },
  createOrder: (items, tableNum, total, gratuity, tax, grandTotal)=> {
    return axios.post("/api/order/new", {
      items: items,
      tableNum: tableNum,
      total: total,
      gratuity: gratuity,
      tax: tax,
      grandTotal: grandTotal
    });
  },
  // updating isPaid to true after payment
  updateIsOrderPaid: id => {
    console.log(id)
    return axios.put(`/api/order/${id}`);
  },
  // view all past orders
  viewAllOrders: ()=> {
    return axios.get("/api/order/view_all");
>>>>>>> 063e89057c27163c248358f8bab7a5e5a7295bde
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
