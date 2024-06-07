const express = require("express");
const app = express();
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send(`<html><body><div>
    <div style="  width: 100%;
    display: flex;
    overflow: auto;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #242525;">
      <h1 style="color: #fbfbfb;
      height: 81px;
      align-self: stretch;
      text-align: center;
      padding-top: 8px;">Cat Of The Day</h1>
      <img
        src="https://cataas.com/cat"
        alt="image"
      />
    </div>
  </div></body></html>`);
});

app.get("/health", (req, res) => {
    res.send("Ok!");
});

app.get("/cat", (req, res) => {
    res.send(`<html><body><div>
    <div style="  width: 100%;
    display: flex;
    overflow: auto;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #242525;">
      <h1 style="color: #fbfbfb;
      height: 81px;
      align-self: stretch;
      text-align: center;
      padding-top: 8px;">Cat Of The Day</h1>
      <img
        src="https://cataas.com/cat"
        alt="image"
      />
    </div>
  </div></body></html>`);
});

// fox
app.get("/fox", (req, res) => {
    res.send(`<html> <head>fox is life</head><body><h1> here is a fox for you!</h1><img src="https://randomfox.ca/images/${Math.floor((Math.random() * 100) + 1)}.jpg"/></body></html>`);
});

app.patch("/", (req, res) => {
  console.log(req.method);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
