import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import geistLatinUrl from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";

import App from "./App";

import "../index.css";

const fontPreload = document.createElement("link");

fontPreload.rel = "preload";
fontPreload.as = "font";
fontPreload.type = "font/woff2";
fontPreload.href = geistLatinUrl;
fontPreload.crossOrigin = "anonymous";

document.head.appendChild(fontPreload);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
