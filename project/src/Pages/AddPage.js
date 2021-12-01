import {Container} from "react-bootstrap";
import React, {useState} from "react";
import firebase from "../Config/firebase";
import {useHistory} from "react-router-dom"

function AddPage(props){

    const [formAdd,setFormAdd] = useState({'title': '', "price": "", "description":"", "details":"", "image":""})
    const history = useHistory()

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setFormAdd({...formAdd,[name]:value})
    }

    const handleSubmitAdd = (event)=>{
        event.preventDefault()
        console.log(formAdd)
        firebase.db.collection("productos")
            .add({
                name:formAdd.title,
                price:formAdd.price,
                description:formAdd.description,
                details:formAdd.details,
                image:formAdd.image
            })
            .then(doc=>{
                console.log("Doc Delete",doc)
                history.push("/")
                alert("New Product Saved!")
            })
            .catch(error=>{
                console.log("error",error)
                alert("Error Product not Saved!")
            })
    }

    return (
        <div>
            <h1>Agregar producto</h1>
            <form onSubmit={handleSubmitAdd}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={formAdd.title} onChange={handleChange}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={formAdd.description} onChange={handleChange}/>
                </div>
                <div>
                    <label>Details</label>
                    <input type="text" name="details" value={formAdd.details} onChange={handleChange}/>
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" name="image" value={formAdd.image} onChange={handleChange}/>
                </div>
                <div>
                    <label>Precio</label>
                    <input type="number" name="price" value={formAdd.price} onChange={handleChange}/>
                </div>
                <input type="submit" value="Guardar"/>

            </form>
        </div>
    )
}
export default AddPage


