import "./ExpenseForm.css";

function ExpenseForm() {
  function formHandler() {
    const form = document.getElementById("form");
    console.log(form.value);
  }

  return (
    <div className="new-expense__controls">
      <form id="form">
        <div className="new-expense__control">
          <label htmlFor="ExpenseTitle">Expense Title</label>
          <input type="text" placeholder="Enter the Title" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input type="number" placeholder="Enter the Amount" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" placeholder="Enter the date" />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={formHandler}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;