import { useEffect } from 'react';

export default function ExpenseEditor({
  expense,
  setExpense,
  categories,
  submitText,
  handleSubmit,
}) {
  useEffect(() => {
    console.log(expense);
  }, [expense]);

  return (
    <form className="w-full md:w-3/5 p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="title" className="text-sm font-medium text-gray-600">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={expense.title}
          placeholder="Groceries"
          className="input-field"
          onChange={(e) => setExpense({ ...expense, [e.target.name]: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="text-sm font-medium text-gray-600">
          Amount
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={expense.amount}
          placeholder="499.49"
          className="input-field"
          onChange={(e) => setExpense({ ...expense, [e.target.name]: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="categoryId" className="text-sm font-medium text-gray-600">
          Category
        </label>
        <select
          id="categoryId"
          name="categoryId"
          value={expense.categoryId}
          className="input-field"
          onChange={(e) => setExpense({ ...expense, [e.target.name]: e.target.value })}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="text-sm font-medium text-gray-600">
          Date and Time
        </label>
        <input
          id="date"
          name="timestamp"
          type="datetime-local"
          value={expense.timestamp}
          className="input-field"
          onChange={(e) => setExpense({ ...expense, [e.target.name]: e.target.value })}
        />
      </div>
      <div>
        <button onClick={handleSubmit} type="submit" className="w-full btn bg-teal-700 text-white rounded-full">
          {submitText ? submitText : 'Submit'}
        </button>
      </div>
    </form>
  );
}
