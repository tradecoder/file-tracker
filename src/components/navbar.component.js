import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery';



export default function Navbar(){
    return(      
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="/file-tracker/" className="navbar-brand">tradecoder</a>
                    </div>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#main-menu"><span className="navbar-toggler-icon"></span></button> 
                    <div id="main-menu" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" ><Link to="/file-tracker/add-file" className="nav-link">Add file</Link></li>
                            <li className="nav-item" ><Link to="/file-tracker/track-file" className="nav-link">Track file</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
    );
}