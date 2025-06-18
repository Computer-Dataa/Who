import React from "react";
import './library.css'
import { Link } from 'react-router-dom'

const Library = () => {
    return (
        <>
         <nav> 
             <Link to='/description' className="onmain">На главную</Link>   
        </nav>  

       
        <div className="design">
            <h1 className="adesign">
               <Link to='./design'>UX\UI Design</Link>
            </h1>
        </div>
        <div className="front">
            <h1 className="afront">
               <Link to='./front'>FrontEnd</Link>
            </h1>
        </div>
        <div className="back">
             <h1 className="aback">
               <Link to='./back'>BackEnd</Link>
            </h1>
        </div>

        <div className="devops">
             <h1 className="adevops">
               <Link to='./devops'>DevOps</Link>
            </h1>
        </div>
        <div className="ai">
             <h1 className="aai">
               <Link to='./ai'>Ai Developer</Link>
            </h1>
        </div>
        <div className="pm">
             <h1 className="apm">
               <Link to='./pm'>Project<br></br>Manager</Link>
            </h1>
        </div>

        <div className="game">
             <h1 className="agame">
               <Link to='./game'>GameDev</Link>
            </h1>
        </div>
        <div className="qa">
             <h1 className="aqa">
               <Link to='./qa'>QA Engineer</Link>
            </h1>
        </div>
        <div className="data">
             <h1 className="adata">
               <Link to='./data'>Data Science</Link>
            </h1>
        </div>
       
        </>
    )
}

export default Library