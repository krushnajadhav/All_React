import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import { useState } from "react";






function App() 
{
//   const TodoItem=[
//     {
//     name:'Buy milk',
//     date:'4/10/2022'
//     },
//     {
//       name:'go to gym',
//       date:'4/10/2022'
//     },
//     {
//       name:'go to Office',
//       date:'4/10/2022'
//     },
//     {
//       name:'thansk umesh',
//       date:'4/10/2022'
//     },
// ]



  return (
    <>
      <AppName />
        <AddTodo  />
        
       
        
      </>
  );
}

export default App;
