import { useState } from "react";

type props = {
    status: number,
    setStatus: any
}

const Interface = (props: props) => {
   return(
    <div>
        <h1>Face Authentification</h1>
        <input type="file" onChange={props.setStatus(1)} accept="image/*"/>
        {(props.status == 1)?
            <img/> : ""
        }
    </div>
   );
}

export default Interface;