function TodoItem1({todo,onDelete})
{

    return(
        <div className="row pt-4">
          <div className="col-lg-4 col-md-4 col-4">
            {todo.name}
          </div>
          <div className="col-lg-4 col-md-4 col-4">
            {todo.date}
          </div>
          <div className="col-lg-4 col-md-4 col-4">
          <button onClick={onDelete} className="btn btn-primary">Delete</button>
          </div>
          
        </div>
    );

}

export default TodoItem1;