import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [Emp, setEmp] = useState({
    name: "",
    job_title: "",
    phone_number1: "",
    email: "",
    address: "",
    city: "",
    state: "",
    primary_emergency_contact: "",
    phone_number2: "",
    relationship1: "",
    secondary_emergency_contact: "",
    phone_number3: "",
    relationship2: "",
  });

  const handleChange = (e) => {
    setEmp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate()
  const location = useLocation()

//   console.log(location)
  const empId = location.pathname.split("/")[2]

  const handleUpdate = async(e)=> {
    e.preventDefault()
    try {
        await axios.put("http://localhost:8000/emp/" + empId, Emp)
        navigate("/show")
    } catch (error) {
        console.log(error)
    }
  }

  console.log(Emp);
  return (
    <div class="container">
      <h1>Update Employee Contact Form</h1>
      <div class="container-details">
        <p>Employee Full Name</p>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          id="name"
          placeholder="Type your answer here"
        />
        <p>Job Title</p>
        <input
          type="text"
          name="job_title"
          onChange={handleChange}
          id="job"
          placeholder="Type your answer here"
        />
        <p>Phone Number</p>
        <input
          type="tel"
          autoComplete="on"
          name="phone_number1"
          onChange={handleChange}
          id="fpls_iti"
          placeholder="000 000 0000"
        />
        <p>Email</p>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          id="email"
          placeholder="johndoe@example.com"
        />
        <div class="address-details-where">
          <p>Address</p>
          <p>City</p>
          <p>State</p>
        </div>
        <div className="address-details-complete">
          <textarea
            class="address"
            name="address"
            onChange={handleChange}
            id="address"
            cols="30"
            rows="10"
            placeholder="Type your answer here"
          ></textarea>
          <input
          class="details"
            type="text"
            name="city"
            onChange={handleChange}
            id="city"
            placeholder="Type your answer here"
          />
          <input
          class="details"
            type="text"
            name="state"
            onChange={handleChange}
            id="state"
            placeholder="Type your answer here"
          />
        </div>
        <p>Primary Emergency Contact</p>
        <input
          type="text"
          name="primary_emergency_contact"
          onChange={handleChange}
          id="primary"
          placeholder="Type your answer here"
        />
        <p>Phone Number</p>
        <input
          type="tel"
          autoComplete="on"
          name="phone_number2"
          onChange={handleChange}
          id="fpls_iti"
          placeholder="000 000 0000"
        />
        <p>Relationship</p>
        <input
          type="text"
          name="relationship1"
          onChange={handleChange}
          id="relationship1"
          placeholder="Type your answer here"
        />
        <p>Secondary Emergency Contact</p>
        <input
          type="text"
          name="secondary_emergency_contact"
          onChange={handleChange}
          id="secondary"
          placeholder="Type your answer here"
        />
        <p>Phone Number</p>
        <input
          type="tel"
          autoComplete="on"
          name="phone_number3"
          onChange={handleChange}
          id="fpls_iti"
          placeholder="000 000 0000"
        />
        <p>Relationship</p>
        <input
          type="text"
          name="relationship2"
          onChange={handleChange}
          id="relationship2"
          placeholder="Type your answer here"
        />
      </div>
      <div>
        <button class="btn btn-primary" onClick={handleUpdate}>Submit</button>
      </div>
    </div>
    );
};

export default Update;
