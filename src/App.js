import './App.css';
import Buttons from './components/Buttons';
import {createUseStyles} from 'react-jss';

const appStyle = createUseStyles({
  App: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
    '@media screen and (max-width: 720px)': {
      flexFlow: 'column',
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