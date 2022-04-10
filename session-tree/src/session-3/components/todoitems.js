const TodoItems = (props) => {
    const { todoItems } = props;

    return (<>
        {
            todoItems.map((item) => {
                return <input style={{type:'checkbox'}}><TodoItem value={item.value} done={item.done}/></input>
            })
        }
    </>)

}
const TodoItem = (props) => {
    const { value, done } = props;
    return <div style={{ color: done ? "green" : 'red' }}>
        {value}
    </div>
}

export default TodoItems;