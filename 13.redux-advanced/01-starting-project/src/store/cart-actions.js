import { uiAction } from './ui-slice';
import { cartAction } from './cart-slice';
//below sendCartData is an action creater or a thunk tht is used to perform async tasks inside redux reducer
//this is the code that is behind cartSlice.actoins and uiSlice.actions.
//before dipatching the action this is considered a normal javascript function hence async tasks can be performed..

export const fetchCartData = () => {
  return async(dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-http-14ebb-default-rtdb.firebaseio.com/cart.json');
      
      if(!response.ok){
        throw new Error('Could not fetch cart data!');
      }
      const data = await response.json();
      return data;
    };

    try{
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart({
        item : cartData.item || [],
        totalQuantiy : cartData.totalQuantiy,
      }));
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  }

}
export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiAction.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
  
      const sendRequest = async () => {
        console.log(cart,'cartcartcart');
        const response = await fetch(
          'https://react-http-14ebb-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify({
              item: cart.item,
              totalQuantiy: cart.totalQuantiy,
            }),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiAction.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          uiAction.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };
};