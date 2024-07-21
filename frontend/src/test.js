import React, { useReducer } from 'react'


let oldState = {
    value: 10
};


const reducerFunction = (oldState,action)=>{

    switch(action.type){
       case 'ADDITON':
       return {...oldState,
            value:oldState.value+1
       };
         break;
       case'SUBSTRACTION':
       return {...oldState,
          value:oldState.value-1
       };
         break;
         
        default: 
        return oldState;
    }

    
}

export default function test() {
    //1. hook area
    const [newState,dispatch] = useReducer (reducerFunction,oldState);


    //2.function area



    //3.return statement
  return (
    <>
    <h1>{oldState.value}</h1>
    <button onClick={()=>{dispatch({type:ADDITION ,payload:1})}}>+</button>
    <button onClick={()=>{dispatch({type:SUBTRACTION, payload:1})}}>-</button>
    </>
  )
}
