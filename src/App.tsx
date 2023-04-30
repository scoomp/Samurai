import React from 'react';
import './App.css';
import Header from "./Compnents/Header/Header";
import Navbar from "./Compnents/Navbar/Navbar";
import Profile from "./Compnents/Profile/Profile";

export function App() {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>

        </div>
    );
}



