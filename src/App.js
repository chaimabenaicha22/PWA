import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Context from "./Global/Context";
import Model from "./components/Model";
import Create from "./components/Create";

function App() {
    return ( <
        Context > <
        Navbar / >
        <
        div className = "container" >
        <
        Create / >
        <
        Posts / > < /
        div > <
        Model / > < /Context>

    );
}

export default App;