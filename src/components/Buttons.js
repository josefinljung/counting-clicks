import React from 'react';
import {createUseStyles, useTheme, ThemeProvider} from 'react-jss';
import Counter from './Counter';

const decrementButtonStyle = createUseStyles((theme) => ({
    button: {
        background: 'white',
        borderRadius: theme.borderRadius,
        border: "2px solid black",
        padding: theme.padding,
        display: theme.display,
        margin: theme.margin,
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
        textTransform: theme.textTransform
    }
}))

const IncrementButtonStyle = createUseStyles((theme) => ({
    button: {
        background: 'hotpink',
        borderRadius: theme.borderRadius,
        border: "2px solid hotpink",
        padding: theme.padding,
        display: theme.display,
        margin: theme.margin,
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
        <button className={classes.button}>
            <span className={classes.label}>- Decrement</span>
        </button>
    )
}

const IncrementButton = ({children, ...props}) => {
    const theme = useTheme()
    const classes = IncrementButtonStyle({...props, theme})
    return (
        <button className={classes.button}>
            <span className={classes.label}>+ Increment</span>
        </button>
    )
}

const theme = {
    display: 'inline',
    textTransform: 'uppercase',
    margin: "20px",
    borderRadius: "30px",
    padding: "15px 45px 15px 45px",
    transition: "0.5s"
}

// const wrapperStyle = createUseStyles({
//     Wrapper: {
//       alignItems: 'center'
//     }
//   })

const Buttons = () => {
    // const classes = wrapperStyle();
    return (
        <ThemeProvider theme={theme}>
            {/* <div className={classes.Wrapper}>   */}
                <DecrementButton />
                <Counter />
                <IncrementButton />
            {/* </div> */}
        </ThemeProvider>
    )
}

export default Buttons;