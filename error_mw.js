const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

app.get("/crash", (req, res, next) => {
    const error = new Error("Something wrong happened here");
    error.statusCode = 400;
    next(error);
});

app.use((error, req, res, next) => {
    console.log("Error Detected:", error.message);

    res.status(error.statusCode || 500).json({
        status: "Fail",
        message: error.message,
    });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});