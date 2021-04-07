import { useState } from 'react';

const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleInputChange, handleSubmit, resetForm };
};

export default useForm;
