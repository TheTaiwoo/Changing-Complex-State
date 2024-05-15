import React, { useState } from "react";
import "./styles.css";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [isMousedOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  }

  return (
    <div className="Container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>

      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="What's your firstname?"
          value={contact.fName}
        />
        <br />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="What's your lastname?"
          value={contact.lName}
        />
        <br />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          value={contact.email}
        />
        <br />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;