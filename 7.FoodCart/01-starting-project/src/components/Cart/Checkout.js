import useForm from '../../Hooks/use-input';
import styles from './Checkout.css';
import Input from '../UI/InputCheckout';
function Checkout(props) {

    const {
        value : yourname,
        valueChangeHandler : yournameHandler,
        inputBlurHandler : yournameBlurHandler,
        isValid : yournameIsValid,
        hasError : yournameHasError,
        reset : yourNameReset,

    } = useForm(value => value?.trim() !== '');

    const {
        value : street,
        valueChangeHandler : streetHandler,
        inputBlurHandler : streetBlurHandler,
        isValid : streetIsValid,
        hasError : streetHasError,
        reset : streetReset,

    } = useForm(value => value?.trim() !== '');

    const {
        value : postalcode,
        valueChangeHandler : postalcodeHandler,
        inputBlurHandler : postalcodeBlurHandler,
        isValid : postalcodeIsValid,
        hasError : postalcodeHasError,
        reset : postalcodeReset,

    } = useForm(value => value?.trim() !== '');

    const {
        inputFeild : city,
        inputFeildHandler : cityHandler,
        inputBlurHandler : cityBlurHandler,
        valueIsValid : cityIsValid,
        hasError : cityHasError,
        reset : cityReset,

    } = useForm(value => value?.trim() !== '');

    const formValid = yournameIsValid && streetIsValid && postalcodeIsValid && cityIsValid;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(formValid){
            return;
        }
        props.onConfirm({
            yourname,
            street,
            postalcode,
            city,
        });
        yourNameReset();
        streetReset();
        postalcodeReset();
        cityReset();
        
    }
    
   console.log();
    return(
        <form className={styles.form} onSubmit = {onSubmitHandler}>
            <Input
                type = "text"
                id = "yourname"
                label = "Your Name"
                onBlur = {yournameBlurHandler}
                onChange = {yournameHandler}
                value = {yourname}
            />
            {yournameHasError && <p className = "ErrorMsg">Feild is required</p>}
            <Input
                type = "text"
                id = "street"
                label = "Street"
                onBlur = {streetBlurHandler}
                onChange = {streetHandler}
                value = {street}
            />
            {streetHasError && <p className = "ErrorMsg">Feild is required</p>}
            <Input
                type = "text"
                id = "postalcode"
                label = "Postal Code"
                onBlur = {postalcodeBlurHandler}
                onChange = {postalcodeHandler}
                value = {postalcode}
            />
            {postalcodeHasError && <p className = "ErrorMsg">Feild is required</p>}
            <Input
                type = "text"
                id = "city"
                label = "City"
                onBlur = {cityBlurHandler}
                onChange = {cityHandler}
                value = {city}
            />
            {cityHasError && <p className = "ErrorMsg">Feild is required</p>}
            <div className="actions">
                <button type = "button" onClick={props.CancelHandler}>Cancel</button>
                <button type = "submit">Confirm</button>
            </div>    
        </form>
    )
}


export default Checkout;