import React,{Component} from "react"
import { Container, Row, Col } from 'react-bootstrap';

function RegisterField(props){

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    console.log(props)
    return(
        <Container fluid>
            <Row>
                <Col xs={2}><label>{capitalize(props.name)}</label></Col>
                <Col><input type={props.type} name={props.name}/></Col>
            </Row>
        </Container>
    )
}
export default RegisterField;

