import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";

export default function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    let filteredItems = props.expenses.filter(ele => {return ele.date.getFullYear().toString() === filteredYear});

    
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses = {filteredItems} />
            <ExpenseList filteredItems = {filteredItems} />
        </Card>
    );
}
