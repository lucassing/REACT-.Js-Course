import React from "react"

function DetailsCell(props){

    const {details} = props

    if(details.length > 100){
        return (<td>{details.slice(0,50)}
            <br></br>
            <button>More...</button>
        </td>)
    } else{
        return (<td>{details}</td>)
    }
    return (<td>{details}</td>)

}
export default DetailsCell

