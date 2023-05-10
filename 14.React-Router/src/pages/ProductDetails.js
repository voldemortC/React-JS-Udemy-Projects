import { useParams, Link } from "react-router-dom";
const ProductDetails = () => {
    const params = useParams();
    //to navigate manually type /product/1
    return(
        <>
            <p>Product Details</p>
            <p>{params.productId}</p>
            <Link to = '..' relative = 'path'>Back</Link>
        </>
    );
}
export default ProductDetails;