const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 9999;

app.use(express.static("dist/client")); // 정적 파일 제공 -> 해당 부분으로 개발자 도구 상에서 CSR과 같은 모습이 보이는 것을 판단된다.

// ✅ Webpack으로 빌드된 `entry-server.js`를 가져오기 (CommonJS 방식)
const { render } = require("../dist/server/entry-server.js");

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  // ✅ `index.html` 읽기
  const indexHtmlPath = path.resolve(__dirname, "../dist/client/index.html");
  let indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

  // ✅ manifest.json을 읽어 CSS와 JS 추가
  const manifestPath = path.resolve(__dirname, "../dist/client/manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

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

  // ✅ SSR 렌더링
  const { pipe } = render(req.url);
  let ssrHtml = "";

  pipe({
    write(chunk) {
      ssrHtml += chunk.toString();
    },
    end() {
      // ✅ `<!--app-html-->` 부분을 SSR 결과로 대체
      indexHtml = indexHtml.replace("<!--app-html-->", ssrHtml);
      // ✅ `<!--app-head-->` 부분을 styles로 대체 (JS는 body에 남김)
      indexHtml = indexHtml.replace("<!--app-head-->", styles);
      // ✅ 스크립트는 body 끝부분에 추가
      indexHtml = indexHtml.replace("</body>", `${scripts}</body>`);

      // ✅ 최종 HTML 전송
      res.status(200).send(indexHtml);
    },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
