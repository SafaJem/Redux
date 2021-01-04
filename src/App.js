import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import Addtodo from './Component/AddTask';
import TodoList from './Component/ListTask';

function App() {
 
  return (
    <div className="App">
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: 'rgb(250, 220, 239)', height: 'auto' }} >
        <h2 style={{margin:'5px', fontStyle:'oblique'}}>My ToDo Application !</h2>
        <Addtodo />
        <TodoList/>
      </Typography>
    </Container>
    </React.Fragment>  
    </div>
  );
}

export default App;
