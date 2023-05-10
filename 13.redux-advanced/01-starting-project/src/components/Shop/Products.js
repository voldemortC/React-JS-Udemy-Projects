import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS = [{
    id : 'p1',
    title : 'Book1',
    price : 12,
    description : 'This is a first product - amazing!'
  },{
    id: 'p2',
    title : 'Book2',
    price : 17,
    description : 'This is a second product - amazing!'
  }]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
          <ProductItem
            key = {item.id}
            id = {item.id}
            title= {item.title}
            price={item.price}
            description= {item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
