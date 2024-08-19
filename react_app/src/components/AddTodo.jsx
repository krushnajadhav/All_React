import { useState } from "react";
import TodoItem1 from "./TodoItem";

function AddTodo(){

  //testing

    const [TodoItem,seTodoItem]=useState([]);

    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleDeleteTodo = (index) => {
      // Filter out the todo item at the specified index
      const updatedTodoItems = TodoItem.filter((_, i) => i !== index);
      seTodoItem(updatedTodoItems);
  };
    
    const handleAddTodo = () => {
        if (name && date) {
          // Create a new todo object
          const newTodo = { name, date };
    
          // Update state with the new todo
          seTodoItem([...TodoItem, newTodo]);
    
          // Clear the input fields
          setName('');
          setDate('');
        } else {
          alert('Please fill in both fields.');
        }
      };


    return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-4">
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>

      <div className="pt-4">
        {TodoItem.map((item, index) => (
          <TodoItem1 key={index} todo={item} onDelete={()=>handleDeleteTodo(index)}/>
        ))}
      </div>

    </div>
  );
}

export default AddTodo;