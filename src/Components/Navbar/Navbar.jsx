import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/show-books"}>Show Books</Link></li>
                <li><Link to={"/add-books"}>Add Books</Link></li>
                
            </ul>

            </nav>
            
        </div>
    );
};

export default Navbar;