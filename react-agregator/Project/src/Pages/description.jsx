import classes from './description.module.css'
import DeskImg from '../Components/deskimg';
import { href, Link } from 'react-router';

const Description = () => {
    return(
        <> 
       <nav className={classes.mainp}> 
            <Link to='/library' className={classes.library}>Библиотека профессий</Link>
       </nav>  

    <div className={classes.test}>
        <div className={classes.container1}>
        <h1>Какая профессия в сфере IT подходит вам больше всего?</h1>
        <h3>
            Ты только заходишь во взрослую жизнь и выбираешь профессию или<br></br>ты уже взрослый и принимаешь<br></br>смелое решение о её смене?  
            <br></br>
            Если твой выбор пал на область IT,  тогда у нас для тебя хорошие новости! 
            <br></br>
            Пройди наш короткий тест<br></br>и получи рекомендации о<br></br>профессиональном профиле в IT-сфере,<br></br>который подошёл бы тебе больше всего.
            <br></br>
            Начни изучать новое уже сегодня!
        </h3>
            <Link to='/testpage' className={classes.btnt}>Начать тест</Link>
    </div>
    <DeskImg />
        </div>
        </>
        
    )   
}

export default Description;