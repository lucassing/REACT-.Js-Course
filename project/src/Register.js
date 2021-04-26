import React, { Component } from "react"
import RegisterElement from "./RegisterElement"
class Register extends Component {
    constructor() {
        super()
        this.fields = [{ label: 'Nombre', type: 'text' },
        { label: 'Apellido', type: 'text' },
        { label: 'Email', type: 'email' },
        { label: 'Telefono', type: 'tel' },
        { label: 'Password', type: 'password' },
        { label: 'Confirmar Password', type: 'password' },
        ]
    }
    render() {
        return (
            <form>
                {this.fields.map(field => <RegisterElement label={field.label} type={field.type} />)}
            </form>
        )
    }
}
export default Register;

// {this.fields.map(field=><RegisterElement label={field.label} type={field.type}/>)
// this.fields = [{label:'Nombre',type:'text'},{label: 'Apellido',type:'text'}]