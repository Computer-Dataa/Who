import classes from './description.module.css'
import DeskImg from '../Components/deskimg';

import { Link } from 'react-router';

const Description = () => {
    return(
        <>
        <body>
        <nav className={classes.navigation}>
        <a className={classes.logo} href="#">Agregator</a>
        <a href="#container" className={classes["main-button"]}>Список профессий</a>

    </nav>
        <div className={classes.test}>
        <div className={classes.container1}>
        <h1>Какая профессия в сфере IT<br/> подходит вам больше всего?</h1>
        <h3>

            Тест составлялся нашими лучшими<br/>аналитиками, а результаты после его<br/>прохождения совпали с изначальным<br/>выбором студента в 99 процентах<br/>случаев.<br/><br/><br/>
            
            Узнай свою профессию уже сегодня!</h3>

            <Link to='/testpage' ><a className={classes.btnt}>Начать тест</a></Link>
    </div>

    <DeskImg />
        </div>
        </body>
        </>
    )
}

export default Description;