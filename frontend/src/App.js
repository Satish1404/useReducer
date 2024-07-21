import { act, useReducer } from "react";
import './App.css';


const oldState = {
  value:0
}

const Reducerfunction = (oldState,action)=>{

  console.log("oldState-->",oldState);
  
  console.log("action-->",action.type);

  switch(action.type){
    case "ADDITION":
    return {...oldState, value:oldState.value+action.payload};
       break;
    case"SUBTRACTION":
    return {...oldState, value:oldState.value-action.payload};
       break;
       
      default:
      return oldState;
  }

}




function App() {

  //1. hook area

   const [newState, dispatch] = useReducer(Reducerfunction,oldState);




  //2.function defination area




  //3.return statement
  return (
    <div className="App">
      <h1>{newState.value}</h1>
      <button type="button" onClick={()=>{dispatch({type:'ADDITION', payload:1})}}>+</button>
      <button type="button" onClick={()=>{dispatch({type:'SUBTRACTION', payload:1})}}>-</button>
    </div>
  );
}

export default App;
