import classes from './StartPage.module.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

import { Link } from 'react-router';

const MainPage = () => {
  
    return(
    <>
<body>
<div className={classes.container}>
      <svg className={classes.foundation} id="foundation" width="700" height="700" viewBox="0 0 540 541" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="280" cy="260" r="230" stroke="black" stroke-width="3" />
        <path d="M2.5 250C2.5 217.498 8.90178 185.314 21.3398 155.286C33.7779 125.258 52.0086 97.9736 74.9911 74.9911C97.9736 52.0086 125.258 33.7779 155.286 21.3398C185.314 8.90177 217.498 2.5 250 2.5" stroke="#F6E088" stroke-width="5" />
        <path d="M2.5 250C2.5 217.498 8.90178 185.314 21.3398 155.286C33.7779 125.258 52.0086 97.9736 74.9911 74.9911C97.9736 52.0086 125.258 33.7779 155.286 21.3398C185.314 8.90177 217.498 2.5 250 2.5" stroke="#00D0E5" stroke-width="5" />
        <path d="M537.5 291C537.5 323.502 531.098 355.686 518.66 385.714C506.222 415.742 487.991 443.026 465.009 466.009C442.026 488.991 414.742 507.222 384.714 519.66C354.686 532.098 322.502 538.5 290 538.5" stroke="#7596F5" stroke-width="5" />
      </svg>  

          <h1 className={classes.txt1}>Агрегатор<br/>
            в сфере IT</h1>
          <a href="description.html" className={classes["link-on"]}>

            <Link to='/description'><h3 className={classes["txt-of-link"]}>Нажмите, чтобы начать.</h3></Link>
          </a>
          
    </div>
</body>
    </>
    )
}

export default MainPage;