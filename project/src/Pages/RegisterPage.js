import React, { Component, useState } from "react"
import RegisterField from "../Componets/Register/RegisterField"
import handleFormItemChange from "../Componets/Register/Helpers"

function RegisterPage(){

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

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("Submitted!",formItems)
    }

    const handleChange = (name, newValue) => {
        const updatedForm = handleFormItemChange(formItems, name, newValue)
        setFormItems(updatedForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            {formItems.map(field => <RegisterField name={field.name} type={field.type} onChangeHandler={handleChange}/>)}
            <button onClick={handleSubmit}>Register!</button>
        </form>
    )
}

export default RegisterPage;



// {this.fields.map(field=><RegisterField label={field.label} type={field.type}/>)
// this.fields = [{label:'Nombre',type:'text'},{label: 'Apellido',type:'text'}]
