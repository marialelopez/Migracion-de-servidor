const express = require("express");
const app = express();
const port = 8000;

const tareas = [
  {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
  },
  {
    id: "789012",
    isCompleted: true,
    description: "Buy groceries",
  },
];

app.get("/", (req, res) => {
  res.json(tareas);
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en: http://localhost:${port}`);
  });
