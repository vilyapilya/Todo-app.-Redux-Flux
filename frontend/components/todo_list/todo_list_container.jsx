import {connect} from 'react-redux';
import allTodos from '../../reducers/selectors';
import TodoList from './todolist';
import receiveTodo from '../../actions/todo_actions';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
