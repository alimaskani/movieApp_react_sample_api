import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {

    return (
        <Router>
            <div className="app">
                <Container>
                    <Routes>
                        <Route path={"/"} element={<Home/>} exact/>
                    </Routes>
                </Container>
            </div>
        </Router>

    );
};

export default App;