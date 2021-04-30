import React from "react"

function ImageCell(props){
    return (<td><img src={props.url} style={{height:"100px"}}></img></td>)
}
export default ImageCell
