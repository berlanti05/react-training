import { useState } from "react";

function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  const validate = () => {
    const gpa = Number(formData.gpa);

    if (!formData.name || !formData.email || !formData.major || !formData.gpa) {
      setError("All fields are required");
      return false;
    }

    if (gpa < 0 || gpa > 4) {
      setError("GPA must be between 0 and 4");
      return false;
    }

    setError("");
    return true;
  };

  return {
    formData,
    error,
    setError,
    handleChange,
    resetForm,
    validate,
  };
}

export default useForm;
