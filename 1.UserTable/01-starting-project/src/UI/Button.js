import "./Button.css";
export default function Button(props){
    const classes = "button "+props.className;
    return(
        <button className={classes} onClick={props.onClick}>{props.children}</button>
    );
}