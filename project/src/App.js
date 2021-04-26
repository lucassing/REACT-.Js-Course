import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter, Route} from "react-router-dom"
import Login from "./login"
import Register from "./Register"
import Home from "./Home";
import ProductTable from "./ProductTable";
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
        <BrowserRouter>
            <Container fluid>
                <Row>
                    <Col >
                        <h1>Market Istambul!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} xl={1}><Menu /></Col>
                    <Col>
                        <Route path="/" component={Home} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/alta" component={Register} exact/>
                        <Route path="/products" component={ProductTable} exact/>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
  )
}

export default App;
