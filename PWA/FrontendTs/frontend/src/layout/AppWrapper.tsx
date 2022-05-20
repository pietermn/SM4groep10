import React from 'react'
import Navbar from './Navbar/Navbar';
import { Routes } from 'react-router-dom';


interface AppWrapper_Children {
    children: React.ReactNode
}

export default function AppWrapper(props: AppWrapper_Children) {
    return (
        <React.Fragment>
            <div id="page-container">
                <div id="content-wrapper">
                    {props.children}
                </div>
                <Navbar />
            </div>
        </React.Fragment>
    )
}
