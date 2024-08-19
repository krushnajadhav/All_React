import styles from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() 
{
  
const [calVal , setcalVal] = useState("");
const onButtonClick = (buttonText) => {
  if(buttonText === 'C')
  {
      setcalVal("");
  }
  else if(buttonText === '=')
  {
     const result = eval(calVal);
     setcalVal(result);
  }
  else
  {
    const newDisplayValue = calVal + buttonText;
    setcalVal(newDisplayValue);
  }
}



const list = ['C','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=','.'];
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}/>
      
        <ButtonContainer onButtonClick={onButtonClick} buttonItems={list}/>
    </div> 
  )
} 
 
export default App
