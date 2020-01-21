import React, { useEffect, useState, useRef } from "react";
import { useQorderContext } from "../utils/QorderStore";
import { ADD_TABLENUM } from "../utils/actions";
import API from "../utils/API";
import NavBar2 from "../components/NavBar2";
import { compareSync } from "bcrypt-nodejs";

function TableNumber(props) {
    const [tableNumber, setTableNumber] = useState([]);
    const [state, dispatch] = useQorderContext();
    // useEffect(() => {
    //     addTableNnumber();
    // }, []);

    const tableRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: ADD_TABLENUM });
        API.createOrder({
            tableNum: tableRef.current.value
        })
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));

        tableRef.current.value = "";
    }
//SECOND ATTEMPT
    // function addTableNnumber() {
    //     API.createOrder()
    //         .then(res => {
    //             setTableNumber(res.data); console.log(res)
    //         })
    //         .catch(err => console.log(err));
    //         console.log(tableNumber);
    // }

//Here is the createOrder function where I am trying to "Add Table Number" to the tableNum state
    // const createOrder = id => {
    //     API.createOrder(id)
    //     .then(results => {
    //         dispatch({
    //             type: ADD_TABLENUM,
    //             _id: results.data
    //         });
    //     }).then(console.log(tableNumber))
    //     .catch(err => console.log(err));
    // };

    // useEffect(() => {
    //     createOrder();
    // }, []);
    

    return(
        <div>
            <NavBar2 />
            <div>
                ENTER THE 4 - DIGIT CODE
            </div>
            <div>
                (Found below the QR Code on the Table)
            </div>
            <div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <input className="form-control" type="text" ref={tableRef} placeholder="A - 3 - T -2"></input>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enter</button>
                </div>
            </form>
            </div>
        </div>
        
    )
}

export default TableNumber;
