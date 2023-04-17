import React, { useReducer } from 'react'
import PageContext from './PageContext'

const reducer = (state,action)=>{
  switch(action.type){
    case "maldives":{
      return state = action.payload;
    }
    case "aggati":{
      return state = action.payload;
    }
    default:{
      return state ;
    }
  }


}

export default function PageState(props) {

    const [pack,dispatchPack] = useReducer( reducer, "maldives");

  return (
    <>
    <PageContext.Provider value = {{pack, dispatchPack}}>
    {props.children}
    </PageContext.Provider>
    </>
  )
}
