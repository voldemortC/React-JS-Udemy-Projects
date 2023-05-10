import { useReducer } from "react";

const defaultState = {
    inputFeild: "",
    isTouched: false,
}

const inputReducer = (state, action) => {

    if(action.type === "INSERT"){
        return{
            inputFeild: action.value,
            isTouched: state.value,
        }
    } else if (action.type === "BLUR"){
        return{
            inputFeild: state.value,
            isTouched: true,
        }
    } else if (action.type === "RESET") {
        return{
            inputFeild: "",
            isTouched: false,
        }
    }

    return defaultState;
}

const useForm = (validateInput) => {
    

    const [inputState, dispatch] = useReducer(inputReducer, defaultState);

    const inputFeildHandler = (e) => {
        dispatch({type: "INSERT", value: e.target.value});
    }

    const inputBlurHandler = () => {
        dispatch({type: "BLUR"});
    }

    const reset = () => {
        dispatch({type: "RESET"});
    }

    const valueIsValid =  validateInput(inputState.inputFeild);
    const hasError =  valueIsValid && inputState.isTouched;


    return {
        inputFeild: inputState.inputFeild,
        inputFeildHandler,
        inputBlurHandler,
        valueIsValid,
        hasError,
        reset,
    }
}
export default useForm;