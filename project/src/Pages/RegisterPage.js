import React, { Component, useState } from "react"
import RegisterField from "../Componets/Register/RegisterField"
import handleFormItemChange from "../Componets/Register/Helpers"
import firebase from "../Config/firebase";
import Button from "react-bootstrap";
import ButtonWithLoading from "../Componets/Forms/ButtonWithLoading";
import {useHistory} from "react-router-dom"


function RegisterPage(){

    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [formItems, setFormItems] = useState([
        {
            'name': 'Nombre',
            'type': 'text',
            'placeholder': '',
            'value': ''
        },
        {
            'name': 'Apellido',
            'type': 'text',
            'placeholder': 'Perez',
            'value': ''
        },
        {
            'name': 'Email',
            'type': 'email',
            'placeholder': '',
            'value': ''
        },
        {
            'name': 'Telefono',
            'type': 'tel',
            'placeholder': '',
            'value': ''
        },
        {
            'name': 'Password',
            'type': 'password',
            'value': ''
        },
        {
            'name': 'Confirmar Password',
            'type': 'password',
            'value': ''
        }
    ])

    const getItemByName = (name)=>{
        return formItems.filter(item => item.name===name)[0].value
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        let email = getItemByName('Email')
        let password = getItemByName('Password')
        firebase.auth.createUserWithEmailAndPassword(email, password)
            .then(data=>{
                console.log("Registro",data)
                firebase.db.collection('usuarios').add({
                    nombre: getItemByName('Nombre'),
                    apellido: getItemByName('Apellido'),
                    email: getItemByName('Email'),
                    telefono: getItemByName('Telefono'),
                    userId: data.user.uid
                }).then(data=>{
                    console.log("En DB:",data)
                    setLoading(false)
                    alert("Register Success")
                    history.push("/")
                })
            })
            .catch(error=>{
                setLoading(false)
                alert("Register Error try again!")
                console.log(error)
            })
    }

    const handleChange = (name, newValue) => {
        const updatedForm = handleFormItemChange(formItems, name, newValue)
        setFormItems(updatedForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            {formItems.map(field => <RegisterField name={field.name} type={field.type} onChangeHandler={handleChange}/>)}
            <ButtonWithLoading loading={loading}>Registrar</ButtonWithLoading>
        </form>
    )
}

export default RegisterPage;



// {this.fields.map(field=><RegisterField label={field.label} type={field.type}/>)
// this.fields = [{label:'Nombre',type:'text'},{label: 'Apellido',type:'text'}]
