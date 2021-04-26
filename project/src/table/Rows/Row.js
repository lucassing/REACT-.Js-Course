import React from "react"
import Buy from "../Buy";
import ImageCell from "./ImageCell"
import DetailsCell from "./DetailsCell"

function Row(props){
    const {id,title,description,details,image,price} = props.element
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <DetailsCell details={details}></DetailsCell>
            <ImageCell url={image}></ImageCell>
            <td>{price}</td>
            <Buy product ={props.element}/>
        </tr>
    )
}
export default Row;
