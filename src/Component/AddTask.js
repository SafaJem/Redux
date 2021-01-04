import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo,filterAll,filterDone, filterDoneNot } from '../Redux/Actions/action';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Addtodo=({handleAdd})=>{
    const [text,setText]=useState("")
    const dispatch=useDispatch()
    const add=()=>{
        dispatch(addTodo({id:Math.random(),edite:false,description:text,isDone:false}));
        setText("")
    }
    const filterdone =()=>{
        dispatch(filterDone())
       } 
    const filterdonenot =()=>{
        dispatch(filterDoneNot())
       }  
    const filterall =()=>{
        dispatch(filterAll())
       }   
    return(  
<div style={{display:'flex', flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'center'}}>
    
<form  onSubmit={(event) => {
        event.preventDefault();
        {add()};
      }}>
      <TextField variant="outlined" color="secondary" placeholder="Add New Task" margin="normal" value={text} onChange={(e)=>setText(e.target.value)}  />
    </form>
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    <Button variant="outlined" color="secondary" onClick={filterall}> Show All</Button>    
    <Button variant="outlined" color="secondary" onClick={filterdone}> Show Done</Button>    
    <Button variant="outlined" color="secondary" onClick={filterdonenot}> Show DoneNot</Button>    
</div>
</div>

    );
}

export default Addtodo