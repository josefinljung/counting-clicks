import React, { useState } from 'react';
import {createUseStyles, useTheme, ThemeProvider} from 'react-jss';
import Counter from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const minusIcon = <FontAwesomeIcon icon={faMinus} />
const plusIcon = <FontAwesomeIcon icon={faPlus} />

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
                transition: theme.transition,
                cursor: 'pointer',
            },
            '&:active': {
                background: 'black',
                color: 'white',
            },
        },
        label: {
            fontWeight: 'bold',
            textTransform: theme.textTransform,
        },
        labelIcon: {
            marginRight: "10px",
        }
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
                transition: theme.transition,
                cursor: 'pointer',
            },
            '&:active': {
                background: 'rebeccapurple',
                border: "2px solid rebeccapurple",
            },
        },
        label: {
            fontWeight: 'bold',
            color: 'white',
            textTransform: theme.textTransform
        },
        labelIcon: {
            marginRight: "10px",
        }
    }))

    const DecrementButton = ({children, ...props}) => {
        const classes = decrementButtonStyle(props)
        return (
            <div>
                <button onClick={decNumber} className={classes.button}>
                    <div className={classes.label}>
                        <span className={classes.labelIcon}>{minusIcon}</span>   
                        Decrement
                    </div>
                </button>
            </div>
        )
    }

    const IncrementButton = ({children, ...props}) => {
        const classes = IncrementButtonStyle({...props, theme})
        return (
            <div>
                <button onClick={incNumber} className={classes.button}>
                    <div className={classes.label}>
                        <span className={classes.labelIcon}>{plusIcon}</span>   
                        Increment
                    </div>
                </button>
            </div>
        )
    }

    const theme = {
        display: 'inline',
        width: "260px",
        margin: "20px",
        borderRadius: "30px",
        padding: "20px 45px 20px 45px",
        fontSize: "1.3rem",
        textTransform: 'uppercase',
        transition: "0.5s",
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