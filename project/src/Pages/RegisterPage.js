import React, { Component } from "react"
import RegisterField from "../Componets/RegisterField"

function RegisterPage(){
    const fields = [{ name: 'nombre', type: 'text'},
        { name: 'apellido', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'telefono', type: 'tel' },
        { name: 'password', type: 'password' },
        { name: 'confirmar password', type: 'password' },
    ]
    const handleSubmit = (event)=>{
        console.log("Submitted!",event)
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => <RegisterField name={field.name} type={field.type} />)}
            <button type="submit">Register!</button>
        </form>
    )
}

export default RegisterPage;



// {this.fields.map(field=><RegisterField label={field.label} type={field.type}/>)
// this.fields = [{label:'Nombre',type:'text'},{label: 'Apellido',type:'text'}]
