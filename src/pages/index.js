import React from "react";
import './styles.css'
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  container: {
  	width: '100vw',
  	height: '100vh',
  }
})

const App = ({children}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>

    </div>
  )
}

export default App
