import styles from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
export default function MealItem(props){
    const cartCtx  = useContext(CartContext);
    const price = `$${props.price}`;
    const addItemHandler = (quantity) => {
        cartCtx.addItem({
            name : props.name,
            price: props.price,
            id   : props.id,
            amount : quantity,
        })
    }
    return(
        <li className =  {styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className= {styles.description}>{props.desc}</div>
                <div className= {styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id = {props.id} addItemHandler = {addItemHandler}/>
            </div>
        </li>
    );
}