

class TodoListItem{
  constructor(){
    console.log(this.props);
    this.todo = this.props.todos;
  }

  render(){
    return(
      <li>
        {this.todo}
      </li>
    );
  }
}

export default TodoListItem;
