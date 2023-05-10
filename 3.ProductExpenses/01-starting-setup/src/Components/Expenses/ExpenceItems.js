import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
import './ExpenceItems.css';
function ExpenceItems(props) {
    // const date = new Date();
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // const currentDate = `${day} - ${month} - ${year}`;

    // const ExpenceItems = "Car Insurance";
    // const ExpenceAmmount = 284.67;
    return (
        <li>
            <Card className='expense-item'>
                <ExpenceDate date = {props.date}/>
                <div className='expense-item__description'>
                    <h2>
                        {props.title}
                    </h2>
                    <div className='expense-item__price'>
                        ${props.ammount}
                    </div>
                </div>
            </Card>
        </li>
    );
  }
  
  export default ExpenceItems;
  