import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
    return (
        <table className='table table-hover'>
        <thead>
          <tr>
            <th scope ='col'>#</th>
            <th scope ='col'>Descrption</th>
            <th scope ='col'>Assigned</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map(todo => (
            <TodoRowItem key = {todo.rownum} rowNum = {todo.rownum} rowDesc = {todo.rowDesc} rowAssign = {todo.rowAssign} 
              deletetodo = {props.deletetodo}/>
          ))}
        </tbody>
      </table>
    );
}
export default TodoTable;