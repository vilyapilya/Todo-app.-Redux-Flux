import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todolistitem';

// class TodoList extends React.Component {

  // render(){
  //
  //   const items = this.props.todos.map((todo) => {
  //       console.log(todo.body);
  //         <TodoListItem>{todo}</TodoListItem>;
  //     });
  //
  //   return(
  //     <ul>
  //       { items }
  //     </ul>
  //   );
  // }
// }

  // render(){
  //
  // const items = this.props.todos.map((todo) => {
  //     console.log(todo.body);
  //       <TodoListItem>{todo.body}</TodoListItem>;
  //   });
  //   return(
  //     <div>
  //       <ul>
  //         { item }
  //       </ul>
  //     </div>
  //   );
  // }


const TodoList = function({todos, receiveTodo}){
      const items = todos.map((todo) => {
        // return <TodoListItem>{todo}</TodoListItem>;
          return <li id={todo.id} >{todo}</li>;
      });
      console.log(items);
      return(
        <ul>
          {items}
        </ul>
      );
};

export default TodoList;
