const express = require("express");
const router = express.Router();
const PORT = 3000;
const db = require("./config/database");

app.use(express.json());
app.use("/posts", require("./routes/posts"));

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
});
