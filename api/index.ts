
import express from "express";

const app = express();

app.get("/", (request, response) => {

    response.send("<h2>Привет Express!</h2>");
});

app.listen(3000);