function allTodos(state) {
  let todoIds = Object.keys(state.todos);
  let todoObjects = todoIds.map((id) => {
    return state.todos[id];
  });
  return todoObjects;
}

export default allTodos;
