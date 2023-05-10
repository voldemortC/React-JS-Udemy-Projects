import ExpenseForm from "./ExpenseForm";
import "./NewExpence.css";
import { useState } from "react";
export default function NewExpence(props){
    const [showForm, setShowForm] = useState(false);
    function saveData(data){
        const expenses = {
            ...data,
            id : Math.floor(Math.random() * (20-1) + 1).toString(),
        }
        props.addNewExpense(expenses);
    }
    
    const showFormToggle = () => {
        setShowForm(!showForm);
    }

    return(
        <div className="new-expense">
            { !showForm && <button type= "button" onClick={showFormToggle}>Add New Expense</button>}
            { showForm && <ExpenseForm saveData = {saveData} showFormToggle={showFormToggle}/>}
        </div>
    );
}