import React from "react"
import {Link} from "react-router-dom"

function DetailsCell(props){

    const {id,details} = props.product

    if(details.length > 100){
        return (<td>{details.slice(0,50)}
            <br></br>
            <Link to={"products/"+id}>
                More...
            </Link>
        </td>)
    } else{
        return (<td>{details}</td>)
    }
    return (<td>{details}</td>)

}
export default DetailsCell

