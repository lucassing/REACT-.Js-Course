import React, {useEffect, useState} from "react"
import Row from "../Componets/table/Rows/Row";
import Headers from "../Componets/table/Headers";
import {getProducts} from "../Services/ProductServices";
import firebase from "../Config/firebase";

function ProductTablePage(props){

    const [filter, setFilter] = useState(9)
    const [products, setProducts] = useState()
    const [error, setError] = useState(null)
    const [isLoaded, setLoad] = useState(false)


    useEffect(()=>{
        firebase.db.collection("productos").get().then(querySnapshot=>{
            console.log(querySnapshot.docs)
            setProducts(querySnapshot.docs)
            setLoad(true)
        })
    },[])



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
                    {products.map(product => <Row id={product.id} element = {product.data()}/>)}
                    </tbody>
                </table>
            )
        }
    }
}
export default ProductTablePage;
