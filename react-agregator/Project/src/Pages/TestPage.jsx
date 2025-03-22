import classes from './test.module.css'

const TestPage = () => {
    return(
        <>
        <body className={classes.body}>
        <div className={classes.box} id="box">
        <div className={classes["progress-bar"]}>
           <div className={classes["progress-bar-inner"]}></div>
        </div>

        <h3 className={classes.maintxt}>Какие из перечисленных занятий кажутся вам наиболее привлекательными и интересными?</h3>
        
        <button className={classes.btn1}></button>
        <button className={classes.btn2}></button>
        <button className={classes.btn3}></button>
        <button className={classes.btn4}></button>
        <button className={classes.btn5}></button>
        <button className={classes.btn6}></button>

        <div className={classes.arrows}
        >
           <button className={classes.arrow1}>  </button>
           <button className={classes.mid}> = </button>
           <button className={classes.arrow2}>  </button>
        </div>
    </div>
        </body>
        </>
    )
}

export default TestPage;