import './App.css';
import TodoTable from './components/TodoTable';
import React, {useState} from 'react';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([
    {rownum: '1', rowDesc: 'Write Book', rowAssign: 'User one'},
    {rownum: '2', rowDesc: 'Read Book', rowAssign: 'User two'}
  ]);

  const addTodo = (assigned, description) => {
    let rownum = 0;
    if (todos.length > 0) {
      rownum = todos[todos.length - 1].rownum + 1;
    } else {
      rownum = 1;
    }
    const newtodo = { rownum: rownum, rowDesc: description, rowAssign: assigned};
    setTodos(todos => [...todos, newtodo]);
    
  }

  const deletetodo = (deletetodorownum) => {
    let filtered = todos.filter(function(value) {
      return value.rownum !== deletetodorownum;
    });
    setTodos(filtered);
  }

  const [addnewtodoform, setAddnewtodoform] = useState(false);

  return (
    <div className='mt-5 container'>
     <div className='card'>
      <div className='card-header'>
        Your todo's
      </div>
      <div className='card-body'>
        <TodoTable todos={todos} deletetodo = {deletetodo}/>
        <button className='btn btn-primary' 
          onClick = {() => setAddnewtodoform(!addnewtodoform)}>{addnewtodoform ? 'close new todo' : 'add new todo'}</button>
        {addnewtodoform && <NewTodoForm addTodo = {addTodo}/>}
      </div>
     </div>
    </div>
  );
}

export default App;
