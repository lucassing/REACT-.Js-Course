import React,{useState} from "react"
//import Button from 'react-bootstrap/Button'
import {Button,Spinner} from 'react-bootstrap'
const styles={
    button:{
        color:"#000000",
        fontSize:"20px"
    }

}
function ButtonWithLoading(props){
    const {variant,type,loading,text} = props
    return(
        /* */
        <Button
            type={type || "submit"}
            variant={variant || "primary"}
            disabled={loading}
            style={styles.button}
        >
            {
                loading &&
                <Spinner animation="border" size="sm" />
            }

            {props.children}
        </Button>
    )

}
export default ButtonWithLoading;
