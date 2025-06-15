import classes from './test.module.css'

const TestPage = () => {
    return(
        <>

        <nav> 
        <div className='burger-btn'>
            <span/>
        </div>
       </nav> 


        <body className={classes.body}>
        <div className={classes.box} id="box">
        <div className={classes["progress-bar"]}>
           <div className={classes["progress-bar-inner"]}></div>
        </div>

        <h3 className={classes.maintxt}>*Вопрос*</h3>
        
        <button className={classes.btn2}>Да</button>
        <button className={classes.btn3}>Нет</button>
        

        <div className={classes.arrows}
        >
           <button className={classes.arrow1}>&#8592;</button>
           <button className={classes.mid}> ? </button>
           <button className={classes.arrow2}>&#8594;</button>
        </div>
    </div>
        </body>
        </>
    )
}

export default TestPage;