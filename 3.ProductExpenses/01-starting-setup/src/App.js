import Expenses from "./Components/Expenses/Expenses";
import NewExpence from "./Components/NewExpense/NewExpence";
import { useState } from "react";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    ammount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", ammount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    ammount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    ammount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA); 
  function addNewExpense(expense){
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });

    console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpence addNewExpense = {addNewExpense}/>
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
