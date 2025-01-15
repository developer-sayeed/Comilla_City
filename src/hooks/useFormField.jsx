import { useState } from "react";

const useFormField = (initState) => {
  const [input, SetInput] = useState(initState);

  // Handle Input Chnage Login

  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // from reset

  const formReset = () => {
    SetInput(initState);
  };
  return { input, handleInputChange, formReset };
};

export default useFormField;
