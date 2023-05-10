import styles from "./InputCheckout.module.css";
export  default function InputCheckout(props){
    return(
        <div className = {styles["input-wrapper"]}>
            <label htmlFor = {props.id}>{props.label}</label>
            <input type = {props.type}
                id = {props.id}
                onBlur={props.onBlur}
                onChange = {props.onChange}
            />
        </div>
    )
}