import classes from './StartPage.module.css'
import { Link } from 'react-router-dom';

const MainPage = () => {
    return(
    <>
<div className={classes.container}>
<svg className={classes.foundation} viewBox='0 0 1920 1300'>
        <path className={classes.top} d="M 926.03658,644.19979 A 161.925,161.925 0 0 1 973.63672,522.39183 161.925,161.925 0 0 1 1095.7119,475.48126"></path>
        <path className={classes.buttom} d="m 1250.5917,630.94874 a 161.925,161.925 0 0 1 -45.9029,121.85299 161.925,161.925 0 0 1 -120.7798,48.65661"></path>
        <path className={classes.circle} d="M 1230.5878,638.23309 A 141.55208,141.55208 0 0 1 1089.0358,779.78517 141.55208,141.55208 0 0 1 947.48369,638.23309 141.55208,141.55208 0 0 1 1089.0358,496.68102 141.55208,141.55208 0 0 1 1230.5878,638.23309 Z"></path>
      </svg>  

          <h1 className={classes.txt1}>Агрегатор<br/>
            в сфере IT</h1>

            <Link to='/description'><h3 className={classes["link-on"]}>Нажмите, чтобы начать.</h3></Link>
            
    </div>
    </>
    )
}

export default MainPage;  