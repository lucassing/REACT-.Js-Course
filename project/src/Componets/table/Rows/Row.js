import React from "react"
import Buy from "../Buy";
import ImageCell from "./ImageCell"
import DetailsCell from "./DetailsCell"

function Row(props){
    const data = {...props.element, 'id':props.id}
    const {id,title,description,details,image,price} = data

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <DetailsCell product={data} ></DetailsCell>
            <ImageCell url={image}></ImageCell>
            <td>{price}</td>
            <Buy product ={id}/>
        </tr>
    )
}
export default Row;
