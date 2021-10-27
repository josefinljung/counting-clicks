import React from 'react'
import { createUseStyles } from 'react-jss';

const counterStyle = createUseStyles({
    resultDiv: {
        display: 'inline',
        fontFamily: 'arial',
        fontWeight: 'bold',
        // '@media screen and (max-width: 720px)': {
        //     display: 'block'
        // }
    }
})

const Counter = () =>  {
    const classes = counterStyle();
    return (
        <div className={classes.resultDiv}>
            Counter: <span>0</span>
        </div>
    );
}

export default Counter;