import axiosInstance from '@/lib/axiosInstance';

const fetchAllCategories = async () => {
  return await axiosInstance.get('/category');
};

const fetchCategoryById = async (categoryId) => {
  return await axiosInstance.get('/category/' + categoryId);
};

const fetchCategorysum = async () => {
  return await axiosInstance.get('/categorysum');
};


const addNewCategory = async (category) => {
  return await axiosInstance.post('/category', {
    category: category,
  });
};

const editCategoryById = async (categoryId, category) => {
  return await axiosInstance.put('/category/', {
    category: category,
  });
};

const deleteCategory = async (categoryId) => {
  return await axiosInstance.delete('/category/', {
    category: {
      id: categoryId,
    },
  });
};

export { fetchAllCategories, fetchCategoryById, addNewCategory, editCategoryById, deleteCategory ,fetchCategorysum};
