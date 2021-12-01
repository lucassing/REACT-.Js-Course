import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter, Route} from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import HomePage from "./Pages/HomePage";
import ProductTablePage from "./Pages/ProductTablePage";
import Menu from "./Componets/Menu";
import DetailPage from "./Pages/DetailPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPage from "./Pages/AddPage";

function App() {

  return (
        <BrowserRouter>
            <Container fluid>
                <Row>
                    <Col><Menu /></Col>
                </Row>
                <Row>
                    <Col>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/login" component={LoginPage} exact/>
                        <Route path="/alta" component={RegisterPage} exact/>
                        <Route path="/products" component={ProductTablePage} exact/>
                        <Route path="/products/:id" component={DetailPage} exact/>
                        <Route path="/new" component={AddPage} exact/>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
  )
}

export default App;
