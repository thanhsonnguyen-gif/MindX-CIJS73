import { useState } from 'react'


function ToDoForm(props) {
  const { onCreateNewToDo } = props;
  const defaultFormValue = {
    inputContent: '',
  }
  const [formValue, setFormValue] = useState(defaultFormValue);
  // e: Event object
  const onFormFieldChange = (fieldName, newValue) => {
    setFormValue({
      ...formValue,
      [fieldName]: newValue,
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCreateNewToDo(formValue.inputContent);
    setFormValue(defaultFormValue);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder='enter to do'
        value={formValue.inputContent}
        onChange={(e) => { onFormFieldChange('inputContent', e.target.value) }} />
      <button type='submit'>create</button>
    </form>
  );
}

export default ToDoForm;

// import { useState } from "react";
// const TodoForm = (props) => {
// const { onCreateNewToDo } =props;
// const defaultFormValue = {
//   inputContent: ''
// }
// const [formValue, setFormValue] = useState(defaultFormValue)

// const onFormChange = (fieldName, newValue) => {
//   setFormValue ({
//     ...formValue,
//     [fieldName]: newValue,
//   });
// }
// // fielName = inputContent
// // value = e.target.value

// const handleFormSubmit = (e) => {
//   e.preventDefault();
//   onCreateNewToDo(formValue.inputContent);
//   // setFormValue(defaultFormValue);
// }

// return(
//   <form onSubmit={handleFormSubmit}>
//     <input placeholder="enter task here"
//     value={formValue.inputContent}
//     onChange={(e) => {onFormChange ('inputContent', e.target.value)}}  />
//     <button type="submit">Create Tast</button>
//   </form>
// )
// }
// export default TodoForm;