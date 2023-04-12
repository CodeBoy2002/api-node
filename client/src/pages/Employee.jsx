import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const [emps, setEmp] = useState([]);

  useEffect(() => {
    const fetchAllEmp = async () => {
      try {
        const res = await axios.get("http://localhost:8000/emp");
        //console.log(res)
        setEmp(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllEmp();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8000/emp/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>EMPLOYEE DETAILS</h1>
      <table>
        {emps.map((emp) => (
          <div key={emp.id}>
            <thead class="table-head">
            <tr class="table-head-row">
              <th>NAME</th>
              <th>JOB TITLE</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              <th>CITY</th>
              <th>STATE</th>
              <th>PRIMARY CONTACT NUMBER</th>
              <th>PHONE NUMBER</th>
              <th>RELATIONSHIP</th>
              <th>SECONDARY CONTACT NUMBER</th>
              <th>PHONE NUMBER</th>
              <th>RELATIONSHIP</th>
              <th>ACTION</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <th>{emp.name}</th>
                <th>{emp.job_title}</th>
                <th>{emp.phone_number1}</th>
                <th>{emp.email}</th>
                <th>{emp.address}</th>
                <th>{emp.city}</th>
                <th>{emp.state}</th>
                <th>{emp.primary_emergency_contact}</th>
                <th>{emp.phone_number2}</th>
                <th>{emp.relationship1}</th>
                <th>{emp.secondary_emergency_contact}</th>
                <th>{emp.phone_number3}</th>
                <th>{emp.relationship2}</th>
                <th>
                  <button onClick={() => handleDelete(emp.id)}>Delete</button>
                </th>
                <th>
                  <button>
                    <Link to={`/update/${emp.id}`}>Update</Link>
                  </button>
                </th>
              </tr>
            </tbody>
          </div>
        ))}
      </table>
      <div>
        <button>
          <Link to="/add">Add new Emp</Link>
        </button>
      </div>
    </div>
  );
};

export default Employee;
