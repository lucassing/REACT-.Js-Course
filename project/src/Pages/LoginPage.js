import React from "react"

function LoginPage(){
    return(
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input id='username' type="text"/>
                <label htmlFor="password">Password</label>
                <input id='password' type="text"/>
            </form>
            <button>Login!</button>
        </div>
    )
}
export default LoginPage
