import classes from './StartPage.module.css'
import { Link } from 'react-router-dom';

const MainPage = () => {
    return(
    <>
    <body className={classes.body}>
<div className={classes.container}>


          <h1 className={classes.txt1}>Агрегатор<br/>
            в сфере IT</h1>

            <Link to='/description'><h3 className={classes["link-on"]}>Нажмите, чтобы начать.</h3></Link>
            
    </div>
    </body>
    </>
    )
}

export default MainPage;  