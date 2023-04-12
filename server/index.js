import express from "express";
import mysql from "mysql";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql@2002",
  database: "emp_contact",
});

app.get("/", (req, res) => {
  res.json("This is the home page");
});

//IF THERE IS ANY AUTHENTICATION PROBLEM USE THIS CODE IN THE MYSQL EDITOR
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PASSWORD'

app.use(express.json());

app.get("/emp", (req, res) => {
  const q = "SELECT * FROM contact_db";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/emp", (req, res) => {
  const q =
    "INSERT INTO contact_db (`name`, `job_title`, `phone_number1`, `email`, `address`, `city`, `state`, `primary_emergency_contact`, `phone_number2`, `relationship1`, `secondary_emergency_contact`, `phone_number3`, `relationship2`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.job_title,
    req.body.phone_number1,
    req.body.email,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.primary_emergency_contact,
    req.body.phone_number2,
    req.body.relationship1,
    req.body.secondary_emergency_contact,
    req.body.phone_number3,
    req.body.relationship2,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("EMP data has been created successfully!");
  });
});

app.delete('/emp/:id', (req, res)=> {
    const empId = req.params.id;
    const q = "DELETE FROM `emp_contact`.`contact_db` WHERE (`id` = ?)"

    db.query(q, [empId], (err, data)=> {
        if(err) return res.json(err)
        return res.json("EMP has been deleted successfully from the database")
    })
})

app.put('/emp/:id', (req, res)=> {
    const empId = req.params.id;
    const q = "UPDATE `emp_contact`.`contact_db` SET `name` = ?, `job_title` = ?, `phone_number1` = ?, `email` = ?, `address` = ?, `city` = ?, `state` = ?, `primary_emergency_contact` = ?, `phone_number2` = ?, `relationship1` = ?, `secondary_emergency_contact` = ?, `phone_number3` = ?, `relationship2` = ? WHERE (`id` = ?)"

    const values = [
        req.body.name,
        req.body.job_title,
        req.body.phone_number1,
        req.body.email,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.primary_emergency_contact,
        req.body.phone_number2,
        req.body.relationship1,
        req.body.secondary_emergency_contact,
        req.body.phone_number3,
        req.body.relationship2,
    ]

    db.query(q, [...values, empId], (err, data)=> {
        if(err) return res.json(err)
        return res.json("EMP has been updated successfully")
    })
})

app.listen(8000, () => {
  console.log("Connected to Backend!");
});
