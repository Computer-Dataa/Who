import React from "react";
import classes from "./menu.modul.css";

const menu = ({header, items}) => {
    return (
       <div className={classes.menu}>
        <div className={classes.blur}/>
        <div className={classes.menu_content}>
            <div className={classes.menu_header}>{header}</div>
            <ul>
                {items.map(item =>
                   <li>
                    <a href={item.href}>{item.value}</a>
                   </li>
                   
                )}
            </ul>


        </div>
        
        

       </div>
    );
};

export default menu;