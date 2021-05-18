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
import firebase from 'firebase'
function App() {
    var firebaseConfig = {
        apiKey: "AIzaSyCTbXEFfwfdFjeATQXfYvYGhUvWNBMB9sU",
        authDomain: "lucas-ecommerce.firebaseapp.com",
        projectId: "lucas-ecommerce",
        storageBucket: "lucas-ecommerce.appspot.com",
        messagingSenderId: "372302931856",
        appId: "1:372302931856:web:cfc2826cb3e602d683b515"
      };
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        else{
            firebase.app()
        }
    

    console.log("firebase", firebase.database())
  return (
        <BrowserRouter>
            <Container fluid>
                <Row>
                    <Col >
                        <h1>Market Istambul</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} xl={1}><Menu /></Col>
                    <Col>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/login" component={LoginPage} exact/>
                        <Route path="/alta" component={RegisterPage} exact/>
                        <Route path="/products" component={ProductTablePage} exact/>
                        <Route path="/products/:id" component={DetailPage} exact/>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
  )
}

export default App;
