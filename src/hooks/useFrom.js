import { useState } from "react";

const useForm = ( initialData, onValidate ) => {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChage = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name] : value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = onValidate(form);

    if (err === null){
      console.log('Enviando formulario...');
    } else {
      setErrors(err);
    }
  }

  return { form, errors, loading, handleChage, handleSubmit }
}

export default useForm;