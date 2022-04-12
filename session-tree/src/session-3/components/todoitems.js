import { useState } from "react";

const TodoItems = (props) => {
    const { toDoItems } = props;
    const handleChecked = () => {
        const [checked, setChecked] = useState({toDoItems})
    }
    return (<>
        {
            toDoItems.map((item) => {
                return <div style={{display: 'flex'}}>
                <input onChange={handleChecked} type='checkbox'/><TodoItem value={item.value} done={item.done}/>
                </div>
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

// const TodoItems = (props) => {
//     const {toDoItems} = props;
//     return(
//         toDoItems.map((item) => {
//             return <div style={{display: 'flex'}}>
//             <input type="checkbox"/>
//             <ToDoItem value={item.value} id={item.id}/>
//             </div>
//         })
//     )
// }
// export default TodoItems;

// const ToDoItem = (props) => {
//     const {value} = props;
//     return <div style={{color: 'green'}}>{value}</div>;
// }