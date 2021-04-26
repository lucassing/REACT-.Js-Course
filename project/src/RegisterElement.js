import React,{Component} from "react"
import { Container, Row, Col } from 'react-bootstrap';

class RegisterElement extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col xs={2}><label>{this.props.label}</label></Col>
                    <Col><input type={this.props.type}/></Col>
                </Row>
            </Container>
        )
    }
}
export default RegisterElement;
