import axiosInstance from '@/lib/axiosInstance';

const fetchAllExpenses = async () => {
  return await axiosInstance.get('/expense');
};

const getIncome = async () => {
  return await axiosInstance.get('/getincome');
};

const fetchExpenseById = async ({ expenseId, fetchDetails = false }) => {
  return await axiosInstance.get('/expense/' + expenseId, {
    params: {
      fetchDetails: fetchDetails,
    },
  });
};

const addNewExpense = async (expense) => {
  return await axiosInstance.post('/expense', {
    expense: expense,
  });
};

const editExpenseById = async (expenseId, expense) => {
  return await axiosInstance.put('/expense/', {
    expense: expense,
  });
};
const addNewIncome = async (income) => {
  return await axiosInstance.post('/income', {
    income: income,
  });
};
const deleteExpense = async (expenseId) => {
  return await axiosInstance.delete('/expense/' + expenseId);
};

export {
  fetchAllExpenses,
  fetchExpenseById,
  addNewExpense,
  editExpenseById,
  deleteExpense,
  addNewIncome,
};
