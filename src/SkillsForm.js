import React, { useState } from "react";
import "./SkillsForm.css";

const SkillsForm = () => {
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="SkillsForm">
        <h1 className="title">Skills profile for {message}</h1>
        <input
          type="text"
          value={message}
          placeholder="Enter your name"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </>
  );
};

export default SkillsForm;
