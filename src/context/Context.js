import { useState, createContext } from 'react';

const Context = createContext();

export function ContextProvider(props) {

  return (
    <Context.Provider>
      {props.children}
    </Context.Provider>
  );
}

export default Context;