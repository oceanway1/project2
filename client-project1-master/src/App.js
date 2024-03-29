import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Sutherland from "./components/Sutherland";


export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
        
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Portfolio} path='/portfolio' />
                <Route component={Sutherland} path='/sutherland' />
                <Route component={Service} path='/service' />

            </Switch>
        </BrowserRouter>
    )

}

