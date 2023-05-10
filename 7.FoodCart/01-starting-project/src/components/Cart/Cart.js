import { useContext, useState } from 'react';
import Modal from './Modal';
import './Cart.css';
import CartContext from '../../store/cart-context';
import CartItems from './CartItem/CartItems';
import Checkout from './Checkout';

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
/*
  const items = [
    {
      id: "c1",
      name: "sushi",
      amount: 2,
      price: 12.99,
    },
    {
      id: "c2",
      name: "Schnitzel",
      amount: 3,
      price: 14.99,
    },
  ];
*/
  const billCtx = useContext(CartContext);

  const cartItemAdd = (item) => {
    billCtx.addItem({...item, amount:1});
  };
  const cartItemRemove = (id) => {
    billCtx.removeItem({id, amount:1});
  };

  const hasItems = billCtx.items.length > 0;

  // const cartItems = (
  //   <ul className='cart-items'>
  //     {billCtx.items.map((item) => (
  //       <CartItems
  //         key={item.id}
  //         name={item.name}
  //         amount={item.amount}
  //         price={item.price}
  //         onRemove={cartItemRemove.bind(null, item.id)}
  //         onAdd={cartItemAdd.bind(null, item)}
  //       />
  //     ))}
  //   </ul>
  // );

  const orderHandler = () => {
    setIsCheckout((isCheckout) => true);
  }

  const CancelHandler = () => {
    setIsCheckout((isCheckout) => !isCheckout);
  }

  
  const submitOrderHandler = (userData) => {
    console.log("onconfirm");
    setIsSubmitting(true);
    fetch('https://react-meals-7cb9f-default-rtdb.firebaseio.com/orders.json', {
      method: "POST",
      body: JSON.stringify({
        users: userData,
        orderedItems: billCtx.items,
      })
    })
    setIsSubmitting(false);
    setDidSubmit(true);
    billCtx.clearCart();
  }
  const modalActions = <div className="actions">
                          <button onClick={props.toggle}>
                            Close
                          </button>
                          {hasItems && <button onClick = {orderHandler}>Order</button>}
                        </div>

  const isSendingData = <p>Sending over data...</p>;

  const didSubmitModalContent = <>
      <p>Successfully sent the order!</p>
      <div className="actions">
      <button onClick={props.toggle}>
        Close
      </button>
    </div>
</>;

  const cartModalContent = <>
      <ul className='cart-items'>
        {billCtx.items.map((item) => (
          <CartItems
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemove.bind(null, item.id)}
            onAdd={cartItemAdd.bind(null, item)}
          />
        ))}
      </ul>
      { isCheckout ? <Checkout CancelHandler = {CancelHandler} onConfirm = {submitOrderHandler}/> : null }
      <div className="total">
        <span>Total Amount</span>
        <span>{billCtx.totalAmount.toFixed(2)}</span>
      </div>
      { !isCheckout &&
        modalActions
      }
  </>

  console.log(isSubmitting, "isSubmitting");
  return (
    <Modal onClose={props.toggle}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSendingData}
      {!isSubmitting && didSubmit ? didSubmitModalContent : null}
    </Modal>
  );
}
