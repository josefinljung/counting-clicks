import React from 'react'
import { createUseStyles } from 'react-jss';
import GithubData from './GithubData';

const counterStyle = createUseStyles({
    numberDiv: {
        display: 'inline',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: "2rem",
        minWidth: "210px",
    }
})

const Counter = ({number}) =>  {
    const classes = counterStyle();
    return (
        <React.Fragment>
            <div className={classes.numberDiv}>
                Counter: <span>{number}</span>
            </div>

            <GithubData number={number}/>
        </React.Fragment>
    );
}

export default Counter;