import "./ExpenseForm.css"
import { useState } from "react";
export default function ExpenseForm(props){
    const [title, setTitle] = useState();
    const [ammount, setAmmount] = useState();
    const [date, setDate] = useState();

    function submitForm(){
        let data = {
            title: title,
            ammount: ammount,
            date: new Date(date),
        }
        props.saveData(data);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type = "text" onChange = {(e)=> setTitle(e.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label >Ammount</label>
                    <input type = "text" min = "0.01" step = "0.01" onChange = {(e)=> setAmmount(e.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type = "date" min = "2012-01-01" max = "2023-4-30" onChange = {(e)=> setDate(e.target.value)}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type= "button" onClick={props.showFormToggle}>Cancel</button>
                <button type= "button" onClick={submitForm}>Add Expense</button>
            </div>
        </form>
    );
}