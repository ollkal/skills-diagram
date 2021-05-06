import React, { useState } from "react";
import "./NameForm.css";

const NameForm = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="NameForm">
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};

export default NameForm;
