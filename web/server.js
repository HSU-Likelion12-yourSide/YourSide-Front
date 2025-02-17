const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 9999;

app.use(express.static("dist/client")); // 정적 파일 제공

// ✅ Webpack으로 빌드된 `entry-server.js`를 CommonJS 방식으로 가져오기
const { render } = require("../dist/server/entry-server.js");

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  const manifest = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "dist/client/manifest.json"),
      "utf8"
    )
  );

  const scripts = Object.keys(manifest)
    .filter((key) => key.endsWith(".js"))
    .map((key) => `<script defer src="${manifest[key]}"></script>`)
    .join("\n");

  const styles = Object.keys(manifest)
    .filter((key) => key.endsWith(".css"))
    .map(
      (key) => `<link rel="stylesheet" type="text/css" href="${manifest[key]}">`
    )
    .join("\n");

  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR</title>
        ${styles}
    </head>
    <body>
        <div id="root">
  `);

  const { pipe } = render(req.url);
  pipe(res);

  res.write(`
        </div>
        ${scripts}
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
