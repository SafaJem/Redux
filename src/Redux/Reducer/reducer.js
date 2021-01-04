import {AddTodo, DeletTodo, DoneTodo, EditTodo,FilterAll,FilterDone,FilterDoneNot,SaveTodo} from '../Constants/constants'
const initialState={
List:[
    {id:0,edite:false,description:"Task1",isDone:false},
    {id:1,edite:false,description:"Task2",isDone:false}
]
}
export const reducer=(state=initialState,action)=>{
switch(action.type){
case AddTodo: return {...state,List:[...state.List,action.payload]};
case EditTodo: return {...state,List:state.List.map(el=>el.id===action.payload?{...el,edite:!el.edite}:el)};
case SaveTodo: return {...state,List:state.List.map(el=>el.id===action.payload.index?{...el,description:action.payload.editeText,edite:!el.edite}:el)};
case DeletTodo: return{...state,List:state.List.filter(el=>el.id!==action.payload)}
case DoneTodo: return{...state,List:state.List.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el)}
case FilterAll:return {...state,List:state.List.filter(el=>el.isDone===true || el.isDone===false)}
case FilterDone:return {...state,List:state.List.filter(el=>el.isDone===true)}
case FilterDoneNot:return {...state,List:state.List.filter(el=>el.isDone===false)}

default : return state ;


}


}