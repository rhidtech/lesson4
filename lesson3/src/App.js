import React, {useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import NumberCounter from './components/NumberCounter';

const JSXdiv = styled.div `
padding: 2em;
text-align : center;



p{
  color :white;
  background-color:purple;
}
`
const JSXh1 = styled.h1`
  color:purple;

`

function App() {

  useEffect(() => {
   alert ("welcome to old trafford, the theatre of dreams")
  }, [])
  
  return (
    <JSXdiv>
      {/*<JSXh1>This is jsx</JSXh1>
      <p className='firstp'>This is a paragraph</p>
     <p>This is a paragraph</p>
     <p>This is a paragraph</p>
     <p>This is a paragraph</p>
     <p>This is a paragraph</p>
     <p>This is a paragraph</p> */}

     <NumberCounter />

    </JSXdiv>
  );
}

export default App;
