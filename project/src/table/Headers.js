import React from "react"

function Headers(props){
    return (
        <thead>
            <tr>
                {Object.keys(props.titles).map(key=><th>{key.toUpperCase()}</th>)}
                <th>Buy</th>
            </tr>
        </thead>

    )
}
export default Headers;
