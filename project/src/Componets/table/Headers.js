import React from "react"

function Headers(props){
    return (
        <thead>
            <tr>
                {/*{Object.keys(props.titles).map(key=><th>{key.toUpperCase()}</th>)}*/}
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Details</th>
                <th>Image</th>
                <th>Buy</th>
            </tr>
        </thead>

    )
}
export default Headers;
