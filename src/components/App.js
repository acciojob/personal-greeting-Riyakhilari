import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {

  const [name, setName] = useState("");

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      {/* Display the greeting only if `name` is not empty */}
      {name && <p>Hello na!</p>}
        {name && <p>Hello n!</p>}
    </div>
  );
};

export default App;
