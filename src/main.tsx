import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WorkbookApp from "./workbook/App";
import "./workbook/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WorkbookApp />
  </StrictMode>,
);
