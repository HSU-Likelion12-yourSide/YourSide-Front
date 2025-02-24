const express = require("express");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const App = require("./App").default;
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  const template = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" href="./favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/styles.css" />
      <title>yourSide</title>
    </head>

    <body>
      <div id="root">${html}</div>
      <script src="client.js"></script>
    </body>
  </html>
  `;
  res.send(template);
});

app.listen(9999, () => {
  console.log("🚀Ready for lunch: http://localhost:9999");
});
