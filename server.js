// TODO: this file :)

const express = require("express");
const app = express();
const PORT = 3000;
const employees = require(`./employees`);

app.get(`/`, (req, res) => {
  res.send("Hello employees!")
});

app.get(`/employees/random`, (req, res) => {
  const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
  res.json(randomEmployee);
});

app.get('/employees', (req, res) => {
  res.json(employees);  // Send the full array of employees as JSON
});

app.get(`/employees/:id`, (req, res) => {
  const { id } = req.params;
  const employee = employees.find(emp => emp.id === parseInt(id));

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: `Employee with id ${id} not found` });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
})