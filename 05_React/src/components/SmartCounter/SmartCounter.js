import {useState} from 'react';

function SmartCounter(){
    const [quantity, upQuant] = useState(1);
    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuant(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;