const express = require("express");
const app = express();

const PORT = 3000;

// endpoint raiz
app.get("/", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});

// endpoint integrantes
const data = {
  integrantes: [
    { nome: "Victor Schmitz" },
    { nome: "Davi Martinelli" },
    { nome: "Hiago Veloso" },
  ],
};

app.get("/integrantes", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
