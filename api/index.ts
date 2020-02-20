// подключение express
import express from "express";
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.get("/", (request, response) => {

    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);