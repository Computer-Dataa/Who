import classes from './test.module.css'
import { Link } from 'react-router-dom'
import Question from '../Components/Question'

const TestPage = () => {
    return(
        <>
        <nav> 
            <Link to='/description' className={classes.main}>На главную</Link>
       </nav>  

        <body className={classes.body}>
        <div className={classes.box} id="box">
        <div className={classes["progress-bar"]}>
           <div className={classes["progress-bar-inner"]}></div>
        </div>

        <Question/>

        <h3 className={classes.maintxt}>*Вопрос*</h3>
        
        <button className={classes.btn2}>Да</button>
        <button className={classes.btn3}>Нет</button>
        
    </div>
        </body>
        </>
    )
}

export default TestPage;