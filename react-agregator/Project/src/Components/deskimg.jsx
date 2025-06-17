import myimg from '../img/6521633.jpg'
import classes from '../Pages/description.module.css'

const DeskImg = () => {
    return (
    <div className={classes.container2}>
        <img className={classes.image} src={myimg}/>
    </div>
    )
}

export default DeskImg;