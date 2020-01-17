//use state of user(firstname, lastname, email, password)
export const CREATE_USER = "CREATE_USER";

// use state of user(firstname, lastname, email, password)
export const UPDATE_USER = "UPDATE_USER";

//use state of CurrentOrder to add TABLENUM
export const ADD_TABLENUM = "ADD_TABLENUM";

//update the state of Products{ }
export const DISPLAY_APPETIZER = "DISPLAY_APPETIZER"

// update state of items, subtotal, and grandtotal with Products
export const UPDATE_CURRENT_ORDER = "UPDATE_CURRENT_ORDER";

// update state of CurrentOrder: items, totals
export const UPDATE_QUANTITY = "UPDATE_QUANTIT";

// use state of CurrentOrder: all but the TABLENUM
export const DISPLAY_CHECK = "DISPLAY_CHECK";

// update state of CurrentOrder: gratuity
export const ADD_TIP = "ADD_TIP";

// update state of CurrentOrder: isProcessed:true
export const ADD_CARDINFO = "ADD_CARDINFO";

// use state of CurrentOrder: items, tip, totals, quatity
export const DISPLAY_CONFIRM = "DISPLAY_CONFIRM";

// update state of CurrentOrder: isProcessed:true
export const DISPLAY_THANKYOU = "DISPLAY_THANKYOU";

// update state of CurrentOrder: isProcessed:false
export const DISPLAY_CANCEL = "DISPLAY_CANCEL";