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

//Only the first 3 Actions are put in the reducer for now

const QorderContext = createContext();
const { Provider } = QorderContext;

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: {
                    firstname: action.user,
                    lastname: action.user,
                    email: action.user,
                    password: action.user,
                    username: action.user
                }
            };
        case UPDATE_USER:
            return {
                ...state,
                user: {
                    firstname: action.user,
                    lastname: action.user,
                    email: action.user,
                    password: action.user,
                    username: action.user
                }
            }
        case ADD_TABLENUM:
            return {
                ...state,
                currentOrder: {
                    tableNum: [action.post, ...state.tableNum]
                }
            }
        default:
            return state;
    }
    
};

const QorderProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        user: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            username: ""
        },

        products: {
            imageURL: "",
            productName: "",
            description: "",
            price: 0,
        },

        orders: [],

        currentOrder: {
            userId: "",
            items: [
                {
                    _id: "",
                    productName: "",
                    quantity: 0
                }
            ],
            subTotal: 0,
            gratuity: 0,
            tax: 0,
            grandTotal: 0,
            tableNum: "",
            isPaid: false,
            isProcessed: false
        },
    });

    return <Provider value={[state, dispatch]} {...props} />
};

//This declares the Context that we will use
const useQorderContext = () => {
    return useContext(QorderContext);
};

export { QorderProvider, useQorderContext };