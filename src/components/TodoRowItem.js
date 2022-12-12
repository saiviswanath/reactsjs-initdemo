function TodoRowItem(props) {
    return (
        <tr onClick={() => {props.deletetodo(props.rowNum)}}>
            <th scope='row'>{props.rowNum}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAssign}</td>
      </tr>
    );
}

export default TodoRowItem;