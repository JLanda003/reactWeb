import { useState } from "react";

const useForm = initialData => {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleChage = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name] : value })
  }

  const handleSubmit = () => {}

  return { form, loading, handleChage, handleSubmit }
}

export default useForm;