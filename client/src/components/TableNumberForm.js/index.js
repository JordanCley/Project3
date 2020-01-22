import React, { useEffect, useState } from "react";
import { useQorderContext } from "../../utils/QorderStore";
import API from "../../utils/API";
// import { ADD_TABLENUM } from "../../utils/actions";

function TableNumberForm (props) {
    const [state, dispatch] = useQorderContext({});
    const [tableNumberState, setTableNumberState] = useState({data: ""});
    const [input, setInput] = useState({data: ""});

    let handleChange = (e) => {
        setTableNumberState({data: e.target.value})
        console.log(e.target.value)
    }

    // useEffect(() => {
    //     API.createOrder()
    //     .then(res => dispatch({ type: ADD_TABLENUM, currentOrder: res.data}))
    //     .catch(err => console.log(err));
    // }, []);
    console.log(tableNumberState.data);
    const addTableNumber =() => {
        return API.addCurrentTableNumber(
            tableNumberState.data
        ).then(res => {
            console.log(res);
            setTableNumberState(res.data);
        })
        .catch(err => alert(err));
    }
    return (
        <div>
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
                    <input className="form-control" type="text" onChange={handleChange} placeholder="A - 3 - T -2"></input>
                    <button type="submit" className="btn btn-primary" onClick={addTableNumber} >Enter</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default TableNumberForm;