import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export default function render(url: string) {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
