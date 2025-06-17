import React from "react";
import './library.module.css'
import { Link } from 'react-router-dom'

const Library = () => {
    return (
        <>
         <nav> 
             <Link to='/description' className="onmain">На главную</Link>   
        </nav>  
        </>
    )
}

export default Library