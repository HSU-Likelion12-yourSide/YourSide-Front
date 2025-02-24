const express = require("express");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const App = require("./App").default;
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  const template = `
  <html>
    <head>
      <title>SSR React APP</title>
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
