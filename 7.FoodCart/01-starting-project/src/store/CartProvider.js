import CartContext from "./cart-context";
import { useReducer } from "react";


const defaultCartItems = {
    items: [],
    totalAmount: 0,
}

const cartStateReducer = (state, action) => {
   if(action.type === "ADD"){
        // let updateCart = state.items.concat(action.item);
        const updatedCartAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        if(existingCartItem){
            // const updatedCart
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items : updatedItems,
            totalAmount : updatedCartAmount < 0 ? 0 : updatedCartAmount,
        }
   }

   if(action.type === "REMOVE"){
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedCartAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if(existingCartItem.amount === 1){
            const filterItemById = state.items.filter(item => item.id === action.id.id);            
            updatedItems = state.items.length > 1 ? filterItemById : defaultCartItems.items;
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items : updatedItems,
            totalAmount : updatedCartAmount < 0 ? 0 : updatedCartAmount,
        }
    }

    if (action.type === 'CLEAR') {
        return defaultCartItems;
    }

   return defaultCartItems;
}

function CartProvider(props){
    const [cartState, dispatchCart] = useReducer(cartStateReducer, defaultCartItems)
    const addItemHandler = (item) => {
        dispatchCart({
            type : "ADD",
            item : item,
        });
    };
    const removeItemHandler = (id) => {
        dispatchCart({
            type : "REMOVE",
            id : id,
        });
    };
    const clearCartHandler = () => {
        dispatchCart({type: 'CLEAR'});
    };

    const cartContext= {
        items : cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler,
    }
    return(
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
