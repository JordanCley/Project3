import React, { createContext, useReducer, useContext } from "react";
import {
  CREATE_USER,
  UPDATE_USER,
  ADD_TABLENUM,
  DISPLAY_APPETIZER,
  UPDATE_CURRENT_ORDER,
  UPDATE_QUANTITY,
  DISPLAY_CHECK,
  ADD_TIP,
  ADD_CARDINFO,
  DISPLAY_CONFIRM,
  DISPLAY_THANKYOU,
  DISPLAY_CANCEL
} from "./actions";

const QorderContext = createContext();
const { Provider } = QorderContext;

//case return may need altering

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.firstname
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.email
      };
    case ADD_TABLENUM:
      return {
        ...state,
        currentOrder: [action.post, ...state.tableNum]
      };
    case DISPLAY_APPETIZER:
      return {
        ...state
      };
    case UPDATE_CURRENT_ORDER:
      return {};
    case UPDATE_QUANTITY:
      return {
        ...state,
        currentOrder: [action.post, ...state.items]
      };
    case DISPLAY_CHECK:
      return {};
    case ADD_TIP:
      return {};
    case ADD_CARDINFO:
      return {};
    case DISPLAY_CONFIRM:
      return {};
    case DISPLAY_THANKYOU:
      return {};
    case DISPLAY_CANCEL:
      return {};
    default:
      return state;
  }
};

const QorderProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    users: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },

    orders: [],

    currentOrder: {
      userId: "",
      items: [
        {
          productName: "",
          quantity: 0
        }
      ],
      subTotal: 0,
      gratuity: 0,
      tax: 0,
      grandTotal: 0,
      tableNum: "",
      isPaid: false
    },

    products: {
      imageURL: "",
      productName: "",
      description: "",
      price: 0
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(QorderContext);
};

export default { QorderProvider, useStoreContext };
