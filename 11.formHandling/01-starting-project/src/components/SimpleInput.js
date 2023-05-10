import useInput from "../hooks/use-input";
const SimpleInput = (props) => {

  const {
    value : yourName,
    isValid : nameIsValid,
    hasError : nameHasError,
    valueChangeHandler : yourNameHandler,
    inputBlurHandler : nameBlurHandler,
    reset : resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value : yourEmail,
    isValid : emailIsValid,
    hasError : emailHasError,
    valueChangeHandler : yourEmailHandler,
    inputBlurHandler : emailBlurHandler,
    reset : resetEmailInput,
  } = useInput(value => value.trim().length !== '' && value.includes('@' && '.'));



  // const isInValid = yourName.trim().length !== 0;
  // let nameIsValid = !isInValid && nameTouched;

  // const emailHasError =  yourEmail.trim().length !== 0 && yourEmail.includes('@');
  // let emailIsValid = !emailHasError && emailTouched;
  
  let formValid = false;
  
  if(nameIsValid && emailIsValid){
    formValid = true;
  }
  
  if(formValid){
    console.log("validated data")
  }


  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!nameIsValid){
      return;
    }
    resetNameInput();
    resetEmailInput();
  }

  // console.log(nameIsValid,"nameIsValid", isInValid, "isInValid", nameTouched, "nameTouched");


 

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`form-control ${nameHasError ? 'invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange = {yourNameHandler} onBlur={nameBlurHandler} value = {yourName}/>
      </div>
      {nameHasError ? <p className="error-text">Name must not be empty!</p> : null}
      <div className={`form-control ${emailHasError ? 'invalid' : ''}`}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange = {yourEmailHandler} onBlur={emailBlurHandler} value = {yourEmail}/>
      </div>
      {emailHasError ? <p className="error-text">Please enter valid email address!</p> : null}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
