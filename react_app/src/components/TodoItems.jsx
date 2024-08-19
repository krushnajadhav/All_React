import TodoItem from "./TodoItem";

const TodoItems = ({todoItem}) => {
    return (
        <div className='todo-container text-center'>

        {todoItem.map((item) => <TodoItem todoDate={item.date} todoName={item.name}/>)}

      </div>

    );

}

export default TodoItems;