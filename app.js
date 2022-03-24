const { Console } = require("console");
const { response } = require("express");
const express = require("express");
const { request } = require("http");
const { restart } = require("nodemon");
const morgan = require("morgan");
const app = express();
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use(express.json());
const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

app.get("/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${
      persons.length
    } people </p> <p>${new Date()}</p>`
  );
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const elId = req.params.id;
  const person = persons.find((person) => person.id === Number(elId));
  if (!person) {
    res.status(404).json({ mgs: "No se encontró" });
  } else {
    res.json(person);
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const elId = req.params.id;
  const erase = persons.find((person) => person.id === Number(elId));
  if (!erase) {
    res.status(404).json({ mgs: "No se encontró el ID" });
  } else {
    const i = persons.indexOf(erase);
    persons.splice(i, 1);
    res.json(persons);
  }
});

app.post("/api/persons", (req, res) => {
  const id = Math.floor(Math.random() * 5000000000000);
  const newPerson = { id, ...req.body };
  persons.push(newPerson);
  res.json(persons);
});

app.post("/api/persons", (req, res) => {
  const id = Math.floor(Math.random() * 5000000000000);
  if (!req.body.name) {
    throw new Error("You must enter a name");
  } else if (
    persons.find((person) => person.name.trim() === req.body.name.trim())
  ) {
    throw new Error("Name must be unique");
  } else if (!req.body.number) {
    throw new Error("You must enter a number");
  } else {
    const newPerson = { id, ...req.body };
    persons.push(newPerson);
    res.json(persons);
  }
});

morgan.token("type", function (req, res) {
  return req.headers["content-type"];
});

morgan.token("body", (req, res) => {
  if (req.method === "POST") {
    return JSON.stringify(req.body);
  }
});

app.listen(8080);
