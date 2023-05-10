import React from "react";
import classes from "./Input.module.css";
import { useRef, useImperativeHandle } from "react";
const Input = React.forwardRef((props, ref) => {
    const InputRef = useRef();
    const activate = () => {
        InputRef.current.focus();
    }

    useImperativeHandle(ref ,()=>{
        return{
            toggle : activate,
        };
    });
    return(
        <div
          className={`${classes.control} ${
            props.state === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref = {InputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    );
});
export default Input;