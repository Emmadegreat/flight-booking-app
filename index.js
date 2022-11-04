const express = require("express");

const { json } = require("express");

const user = require("./router/userRoute")

const app = express();

app.use(json());

app.use("/user", user);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("booking flight ticket");
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));