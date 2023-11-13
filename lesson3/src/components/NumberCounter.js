import React, {useState} from 'react'
import  Styled  from 'styled-components'

const NumberCounter = () => {
    const [Counter, setcounter] = useState(0)

const Button = Styled.button `
margin:0.5em;
` 
const IncrementCounter = () => {
    setcounter(Counter + 1)
} 

const DecrementCounter = () => {
     setcounter(Counter - 5)
 } 


  return (
    <div>
        <h1> {Counter} </h1>
          <Button onClick={DecrementCounter}> Subtract </Button>
          <Button onClick={IncrementCounter}> Add </Button>

    </div>
  )
}

export default NumberCounter



