import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function NavBar(props) {
    const { handleKeyDown, value, handleTextChange } = props;
    return (
        <div className="navbar">
            <div className="nav-links">
                <Link to='/home' className="nav-link">Home</Link>
                <Link to='/following' className="nav-link">Following</Link>
            </div>
            <div className="nav-input">
                <input type="text" placeholder='please enter username' onChange={(e) => handleTextChange(e)} onKeyPress={(e) => handleKeyDown(e)} value={value} />
            </div>
        </div>
    )
}