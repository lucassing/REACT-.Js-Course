import React, {useEffect, useState} from "react"
import { Container, Row, Col } from 'react-bootstrap';
import {getProduct, getProducts} from '../Services/ProductServices'

function DetailPage(props){
    const [product, setProduct] = useState()
    const [error, setError] = useState(null)
    const [isLoaded, setLoad] = useState(false)

    useEffect(()=>{
        getProduct(props.match.params.id).then(
            (result) => {
                setProduct(result)
                setLoad(true)
            },
            (error) => {
                setError(true)
                setLoad(true)
            }
        )
    },[])

    if(error === 0){
        return <div>Error!!</div>
    } else if(!isLoaded){
        return <div>Loading...</div>
    } else{
        return (
            <Container fluid>
                <Row>
                    <Col><h3>{product.title}</h3></Col>
                </Row>
                <Row>
                    <Col xs="auto"><img src={product.image} style={{height:"300px"}}></img></Col>
                    <Col>{product.details}</Col>
                </Row>
            </Container>

        )
    }
}
export default DetailPage
