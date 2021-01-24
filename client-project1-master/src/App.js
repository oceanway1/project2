import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import React, { Component } from 'react';

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Service} path='/service' />
                <Route component={Portfolio} path='/portfolio' />

            </Switch>
        </BrowserRouter>
    )

}

