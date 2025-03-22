import myimg from '../img/6521633.jpg'
import classes from '../Pages/description.module.css'

const DeskImg = () => {
    return (
    <div classname={classes.container2}>
        <img classname={classes.image} src={myimg}/>
    </div>
    )
}

export default DeskImg;