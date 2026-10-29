import express from "express";
import car from "./car.js";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta) => {
  resposta.send(car);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
