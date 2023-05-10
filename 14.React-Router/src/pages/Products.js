import { Link } from 'react-router-dom';
function Product() {
  const Products = [
    { id: 'p1', title: 'Product 1'},
    { id: 'p2', title: 'Product 2'},
    { id: 'p3', title: 'Product 3'},
  ]
    return (
      <>
        <div>This is Product</div>
        <ul>
          {
            Products.map((prod)=>(
              <li key = {prod.id}><Link to = {prod.id}><p>{prod.title}</p></Link></li>
            ))
          }
        </ul>
      </>
    );
  }
  
  export default Product;
  