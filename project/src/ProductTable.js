import React, {useEffect, useState} from "react"
import Row from "./table/Rows/Row";
import Headers from "./table/Headers";

function ProductTable(props){

    const [filter, setFilter] = useState(9)
    const [products, setProducts] = useState()
    const [error, setError] = useState(null)
    const [isLoaded, setLoad] = useState(false)

//     const toInitial = (event)=>{
//         getProducts()
//         setFilter(parseInt(event.target.value))
//         priceFilter(event)
//     }
// //
//     const priceFilter = (event)=>{
//         let filteredProducts = products.filter((product)=>{
//             console.log("test",product.id,"vs",filter)
//             return product.id==filter
//         })
//         console.log(filteredProducts)
//         setProducts(filteredProducts)
//     }

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = ()=>{
        fetch("https://my-json-server.typicode.com/lucassing/REACT-.Js-Course/products")
            .then(res=>res.json())
            .then(
                (result) => {
                    setProducts(result)
                    setLoad(true)
                },
                (error) => {
                    setError(true)
                    setLoad(true)
                }
            )
    }

    if(error === 0){
        return <div>Error!!</div>
    } else if(!isLoaded){
        return <div>Loading...</div>
    } else{
        if(products.length === 0){
            return <div>No result...</div>
        }else{
            return (
                <table>
                    <Headers titles={products[0]}/>
                    <tbody>
                    {products.map(product => <Row element = {product}/>)}
                    </tbody>
                    {/*<label htmlFor="filter">Qty Filter:</label>*/}
                    {/*<input type="number" value={filter} onChange={toInitial} id='filter'/>*/}
                </table>
            )
        }
    }
}
export default ProductTable;
