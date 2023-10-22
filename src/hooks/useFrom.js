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
    setErrors(err);
    
    if (Object.keys(err).length === 0){
      setLoading(true);
      fetch("https://formsubmit.co/ajax/joshualv46@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          data.success === 'true' && setForm(initialData);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    }
  }

  return { form, errors, loading, handleChage, handleSubmit }
}

export default useForm;