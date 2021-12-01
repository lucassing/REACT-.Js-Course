import React, {useEffect, useState} from "react"
import { Container, Row, Col } from 'react-bootstrap';
import {getProduct, getProducts} from '../Services/ProductServices'
import firebase from "../Config/firebase";
import {useHistory} from "react-router-dom"

function DetailPage(props){
    const history = useHistory()
    const [product, setProduct] = useState()
    const [error, setError] = useState(null)
    const [isLoaded, setLoad] = useState(false)
    const [form, setForm] = useState({'title': '', "price": "", "description":"", "details":"", "image":""})
    const id = props.match.params.id

    useEffect(()=>{
        firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                setProduct(doc.data())
                setLoad(true)
                setForm({title:doc.data().title,
                    price:doc.data().price,
                    description:doc.data().description,
                    details:doc.data().details,
                    image:doc.data().image})
            })
    },[])



    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
    }

    const handleDelete = (event)=>{
        event.preventDefault()
        firebase.db.doc("productos/"+id).delete()
            .then(data=>{
                console.log("data", data)
                history.push("/")
        }).catch(error=>{
            console.log("Error", error)
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        firebase.db.doc("productos/" + id)
            .set({
                title:form.title,
                price:form.price,
                description:form.description,
                details:form.details,
                image:form.image,
            },{merge:true})
            .then( doc => {
                console.log("doc",doc)
                alert("Product saved!")
                history.go(0)
            })
            .catch(error=>{
                console.log("error", error)
            })
    }

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
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Title</label>
                                <input type="text" name="title" value={form.title} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Description</label>
                                <input type="text" name="description" value={form.description} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Details</label>
                                <input type="text" name="details" value={form.details} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Image</label>
                                <input type="text" name="image" value={form.image} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Precio</label>
                                <input type="number" name="price" value={form.price} onChange={handleChange}/>
                            </div>
                            <input type="submit" value="Guardar"/>
                            <button onClick={handleDelete}>Eliminar</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default DetailPage
