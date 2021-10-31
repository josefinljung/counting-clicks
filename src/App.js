import './App.css';
import Buttons from './components/Buttons';
import {createUseStyles} from 'react-jss';

const appStyle = createUseStyles({
  App: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "200px",
    fontFamily: 'arial',
    padding: "0px 100px 50px 100px",
    '@media screen and (max-width: 1040px)': {
      flexFlow: 'column',
      marginTop: "100px",
      padding: "0px 50px 50px 50px"
    },
  }
})

const App = () => {
  const classes = appStyle();
  return (
    <div className={classes.App}>
      <Buttons />
    </div>
  );
}

export default App;