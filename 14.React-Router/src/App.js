import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Products';
import RootLayout from './pages/Root';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';

// {path : '/products/:product-1', element: <ProductDetails />} path after :  is identifier
 
const router = createBrowserRouter([
  { 
    path : '/', element: <RootLayout />,
    errorElement : <Error />,
    children : [
      {index : true , element: <Home />},
      {path : 'products', element: <Product />},
      {path : 'products/:productId', element: <ProductDetails />},
    ],
  },
])
function App() {

  return <RouterProvider router = {router} />;
}

export default App;


// {path : '', element: <Home />}, 
// the empty path represents that the component inside element is root path
// to avod leaving empty path index: 'true' is alternative 