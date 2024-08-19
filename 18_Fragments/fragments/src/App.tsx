import FoodItem from './components/FoodItem';
import Container from './components/Container';
import InputComp from './components/InputComp';
import { useState } from 'react';
function App() {

  // let foodItem = ["apple","banana","orange","grapes"];

  let [foodItems ,setFoodItems] = useState(["apple","banana","orange"]);
  
  function addItem(event:any){
    if(event.key === 'Enter')
    {
      let newItem = event.target.value;
      let newItems = [...foodItems,newItem];
      setFoodItems(newItems);
    }
    
  }

   return (
      <Container>
        <h1>My List</h1>
        <FoodItem data={foodItems} bought={false} BuyButtonHanddeler={()=>{console.log(`${foodItems} : got`)}}></FoodItem>
        <InputComp MyMethod={addItem}> </InputComp>
      </Container>
    
  );
}

export default App; 

function getElemetById(arg0: string) {
  throw new Error('Function not implemented.');
}

