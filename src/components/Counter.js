import React from 'react'
import { createUseStyles } from 'react-jss';

const counterStyle = createUseStyles({
    numberDiv: {
        display: 'inline',
        textAlign: 'center',
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: "2rem",
        minWidth: "210px",
        // textAlign: 'center'
        // '@media screen and (max-width: 720px)': {
        //     display: 'block'
        // }
    }
})

const Counter = ({number}) =>  {
    const classes = counterStyle();
    return (
        <div className={classes.numberDiv}>
            Counter: <span>{number}</span>
        </div>
    );
}

export default Counter;