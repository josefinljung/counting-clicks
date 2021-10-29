import './App.css';
import Buttons from './components/Buttons';
import {createUseStyles} from 'react-jss';

const appStyle = createUseStyles({
  App: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
    '@media screen and (max-width: 992px)': {
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