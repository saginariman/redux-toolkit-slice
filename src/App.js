import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addTodo, decrement, increment, removeLastTodo} from "./toolkitRedux/toolkitSlice";

const addAsyncTodo = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(addTodo('ASYNC TODO'))
    }, 2000)
  }
}

function App() {
  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()


  return (
    <div className="App">
      fajdfkasjl
      <h1>Счетчик {count}</h1>
      <button onClick={() => dispatch(increment())}>Инкремент</button>
      <button onClick={() => dispatch(decrement())}>Декремент</button>
      <button onClick={() => dispatch(removeLastTodo())}>Удалить последний Туду</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Добавить туду</button>
      <button onClick={() => dispatch(addAsyncTodo())}>ДОбавить АСИНК ТУДУ</button>

      <ul>
        {todos.map(todo => 
          <li key={todo}>{todo}</li>  
        )}
      </ul>
    </div>
  );
}

export default App;
