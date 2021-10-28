import React, { useState } from 'react';
import {createUseStyles, useTheme, ThemeProvider} from 'react-jss';
import Counter from './Counter';

const Buttons = () => {

    const [number, setNumber] = useState(0);

    const incNumber = () => {
        setNumber(number+1);
    }

    const decNumber = () => {
        setNumber(number-1);
    }

    const decrementButtonStyle = createUseStyles((theme) => ({
        button: {
            width: theme.width,
            background: 'white',
            borderRadius: theme.borderRadius,
            border: "2px solid black",
            padding: theme.padding,
            display: theme.display,
            margin: theme.margin,
            fontSize: theme.fontSize,
            '&:hover': {
                background: 'black',
                color: 'white',
                transition: theme.transition
            },
            // '@media screen and (max-width: 720px)': {
            //     display: 'block'
            // }
        },
        label: {
            fontWeight: 'bold',
            textTransform: theme.textTransform,
        },
    }))

    const IncrementButtonStyle = createUseStyles((theme) => ({
        button: {
            width: theme.width,
            background: 'hotpink',
            borderRadius: theme.borderRadius,
            border: "2px solid hotpink",
            padding: theme.padding,
            display: theme.display,
            margin: theme.margin,
            fontSize: theme.fontSize,
            '&:hover': {
                background: 'rebeccapurple',
                border: "2px solid rebeccapurple",
                transition: theme.transition
            },
            // '@media screen and (max-width: 720px)': {
            //     display: 'block'
            // },
        },
        label: {
            fontWeight: 'bold',
            color: 'white',
            textTransform: theme.textTransform
        }
    }))

    const DecrementButton = ({children, ...props}) => {
        const classes = decrementButtonStyle(props)
        return (
            <button onClick={decNumber} className={classes.button}>
                <span className={classes.label}>
                    - Decrement
                </span>
            </button>
        )
    }

    const IncrementButton = ({children, ...props}) => {
        const theme = useTheme()
        const classes = IncrementButtonStyle({...props, theme})
        return (
            <button onClick={incNumber} className={classes.button}>
                <span className={classes.label}>
                    + Increment
                </span>
            </button>
        )
    }

    const theme = {
        display: 'inline',
        width: "240px",
        textTransform: 'uppercase',
        margin: "20px",
        borderRadius: "30px",
        padding: "20px 45px 20px 45px",
        transition: "0.5s",
        fontSize: "1.3rem",
    }

    return (
        <ThemeProvider theme={theme}>
                <DecrementButton />
                <Counter number={number}/>
                <IncrementButton />
        </ThemeProvider>
    )
}






export default Buttons;