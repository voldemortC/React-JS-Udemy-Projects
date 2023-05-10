import React from "react";
import AnotherOne from "./AnotherOne";
function DemoOutput(props){
    console.log("INSIDE DEMO COMPONENT");
    return(
        <>
            {!props.show && <AnotherOne>this is new!</AnotherOne>}
        </>
    );
}

export default React.memo(DemoOutput);
