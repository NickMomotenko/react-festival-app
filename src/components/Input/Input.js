import React, { useState } from "react";

import "./Input.scss";

const Input = ({ name, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <input
      className="input"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
