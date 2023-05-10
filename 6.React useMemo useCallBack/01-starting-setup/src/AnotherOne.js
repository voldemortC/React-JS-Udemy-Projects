export default function AnotherOne(props){
    console.log("INSIDE ANOTHER ONE COMPONENT");
    return(
        <>
            {props.children}
        </>
    );
}