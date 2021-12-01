import React, { useState } from "react"
import firebase from "../Config/firebase";
import {useHistory} from "react-router-dom"
import ButtonWithLoading from "../Componets/Forms/ButtonWithLoading";

function LoginPage(){
    const [form, setForm] = useState({'email':'','password':''})
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        firebase.auth.signInWithEmailAndPassword(form.email, form.password)
            .then(data=>{
                    setLoading(false)
                    console.log("Login",data)
                    alert("Login succed!")
                    history.push("/")
                }
            )
            .catch(error=>{
                setLoading(false)
                alert("Login error, try again!")
                console.log("Error",error)
            })

    }

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" name='email' onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input id='password' type="password" name='password' onChange={handleChange}/>
                <ButtonWithLoading loading={loading}>Login</ButtonWithLoading>
            </form>
        </div>
    )
}
export default LoginPage
