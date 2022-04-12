import { useState } from "react";

const AddExpense = (props) => {
  const { onAddNewExpenseInfo } = props;

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const defaultFormValue = {
    name: "",
    amount: "",
    date: "",
  };
  const [formValue, setFormValue] = useState(defaultFormValue);
  // e: Event object
  const onFormFieldChange = (fieldName, newValue) => {
    console.log(fieldName, newValue);
    setFormValue({
      ...formValue,
      [fieldName]: newValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddNewExpenseInfo(formValue);
    setFormValue(defaultFormValue);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Name</label>
            <input
              placeholder="enter name of expense"
              value={formValue.name}
              onChange={(e) => {
                onFormFieldChange("name", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              placeholder="enter amount"
              type="number"
              value={formValue.amount}
              onChange={(e) => {
                onFormFieldChange("amount", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              placeholder="enter date"
              type="date"
              value={formValue.date}
              onChange={(e) => {
                onFormFieldChange("date", e.target.value);
              }}
            />
          </div>
          <div>
            <button onClick="submit">Add</button>
            <button onClick={handleCloseForm}>Cacel</button>
          </div>
        </form>
      ) : (
        <button onClick={handleShowForm}>Add new Expense</button>
      )}
    </div>
  );
};

export default AddExpense;
