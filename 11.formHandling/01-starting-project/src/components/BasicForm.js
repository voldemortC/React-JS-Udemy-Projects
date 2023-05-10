import useForm from "../hooks/use-form";
const BasicForm = (props) => {

  const { 
      inputFeild : firstName ,
      inputFeildHandler : firtNameHandler,
      valueIsValid : firstNameIsValid,
      inputBlurHandler : firstNameBlur,
      hasError : firstNameError,
      reset : firstNamereset
    } = useForm(value => value?.trim() !== '');

  const { 
    inputFeild : lastName ,
    inputFeildHandler : lastNameHandler,
    valueIsValid : lastNameIsValid,
    inputBlurHandler : lastNameBlur,
    hasError : lastNameError,
    reset : lastNamereset
  } = useForm(value => value?.trim() !== '');

  const { 
    inputFeild : email ,
    inputFeildHandler : emailFeildHandler,
    valueIsValid : emailIsValid,
    inputBlurHandler : emailBlur,
    hasError : emailError,
    reset : emailreset
  } = useForm(value => value?.trim() !== '' || value?.includes('@'));



  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(!firstNameIsValid && !lastNameIsValid && !emailIsValid){
      return;
    }
    
    firstNamereset();
    lastNamereset();
    emailreset();
  }


  return (
    <form onSubmit = {onSubmitHandler}>
      <div className='control-group'>
        <div className= {`form-control ${firstNameError ? 'invalid' : ''}`}>
          <label htmlFor='firstname'>First Name</label>
          <input 
            type='text' 
            id='firstname' 
            onChange={firtNameHandler} 
            onBlur = {firstNameBlur}
            value = {firstName}
          />
          {firstNameError && <p>FirstName must not be empty</p>}  
        </div>
        <div className={`form-control ${lastNameError ? 'invalid' : ''}`}>
          <label htmlFor='lastname'>Last Name</label>
          <input 
            type='text' 
            id='lastname' 
            onChange={lastNameHandler} 
            onBlur = {lastNameBlur} 
            value = {lastName}
          />
          {lastNameError && <p>LastName must not be empty</p>}
        </div>
      </div>
      <div className={`form-control ${emailError ? 'invalid' : ''}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='text' 
          id='email' 
          onChange={emailFeildHandler} 
          onBlur = {emailBlur} 
          value = {email}
        />
        {emailError && <p>Please Enter Valid Email</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
