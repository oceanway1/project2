import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import About from "./components/About";
// import Footer from "./components/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
        
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Service} path='/service' />
                <Route component={Portfolio} path='/portfolio' />
                <Route component={About} path='/about' />


            {/* <Footer/> */}
            </Switch>
        </BrowserRouter>
    )

}

