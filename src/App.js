import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    // Validation
    if (!formData.firstname) {
      setError("First name is required");
      return;
    }
    if (!formData.lastname) {
      setError("Last name is required");
      return;
    }
    if (!formData.email) {
      setError("Email is required");
      return;
    }
    if (!formData.password) {
      setError("Password is required");
      return;
    }
    if (!formData.confirmpassword) {
      setError("Confirm password is required");
      return;
    }
    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    // Save data (for demonstration, we'll just log it)
    console.log("Form data submitted:", formData);

    // Set success message
    setSuccessMessage("Form data fetched successfully!");

    // Here you can add code to save the data to a server or local storage
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter first name"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Lastname:</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter last name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
