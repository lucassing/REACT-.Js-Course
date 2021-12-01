import React, {useState} from "react"

function Buy(props){
    const [visibleBuyMessage, setVisibleBuyMessage] = useState(false)
    const [buyMessage, setBuyMessage] = useState('Gracias por su compra! Producto SKU:')

    let delay = ms => new Promise(res => setTimeout(res, ms));
    const showOnOff = async (value) => {
        await delay(value);
        setVisibleBuyMessage(false)
    }

    const buyPressed = async ()=>{
        setVisibleBuyMessage(true)
        await showOnOff(1500)
    }

    return (
            <td>
                <button onClick={buyPressed}>Buy!</button>
                <div hidden={!visibleBuyMessage}>
                    {buyMessage+props.product}
                </div>
            </td>
    )

}
export default Buy;
