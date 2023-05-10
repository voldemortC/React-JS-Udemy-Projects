import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
// import { uiAction } from './store/ui-slice';
import { sendCartData, fetchCartData }from './store/cart-actions';
// import { cartAction } from './store/cart-slice';

let setInitial = true;

function App() {
  const dispatch = useDispatch();
  const showcart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch]);

  useEffect(()=>{
    
      // const sendData = async() => {
      //   dispatch(uiAction.showNotification({
      //     status: 'pending...',
      //     title: 'Sending...',
      //     message: 'Sending data please wait...!',
      //   }))
      //   const response = await fetch('https://react-http-14ebb-default-rtdb.firebaseio.com/cart.json', {
      //     method: 'PUT',
      //     body: JSON.stringify(cart),
      //   })
      //   if(!response.ok){
      //     throw new Error('Sending cart data faled!');
      //   }
      //   dispatch(uiAction.showNotification({
      //     status: 'success',
      //     title: 'Success',
      //     message: 'Sent data successfully!',
      //   }))
      // }
      // if(setInitial){
      //   setInitial = false;
      //   return;
      // }

      // sendData().catch((error)=> {
      //   console.log(error);
      //   dispatch(uiAction.showNotification({
      //     status: 'error',
      //     title: 'Error',
      //     message: error.message,
      //   }))
      // });
    

    if(setInitial){
      setInitial = false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch])

  return (
    <>
      { 
        notification && <Notification 
          status = {notification.status}
          title = {notification.title}
          message = {notification.message}
        />
      }
      <Layout>
        { showcart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
