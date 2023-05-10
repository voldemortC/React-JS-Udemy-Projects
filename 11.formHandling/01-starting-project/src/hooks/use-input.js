import { useReducer, useState } from 'react';

const defaultState = {
    inputFeild : "",
    isTouched : false,
}

const inputReducer = (state, action) => {


    return defaultState;
}

const useInput = (validateValue) => {
    
    const [inputState, dispatchInput] = useReducer(defaultState, inputReducer);

    const [inputFeild, setInputFeild] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(inputFeild);
    let hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e) => {
        setInputFeild(e.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
        if(inputFeild.trim().length === 0){
          return;
        }
    }

    const reset = () => {
        setInputFeild('');
        setIsTouched(false);
    }

    return{
        value: inputFeild, isValid : valueIsValid ,hasError, valueChangeHandler, inputBlurHandler, reset
    };
    
}
export default useInput;

// https://codesandbox.io/s/use-input-0jbse?file=/src/components/Input.js