import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import favicon from "./assets/favicon.svg";

import "./styles/global.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/About.css";
import "./styles/Education.css";
import "./styles/Skills.css";
import "./styles/Projects.css";
import "./styles/Certifications.css";
import "./styles/Achievements.css";
import "./styles/Contact.css";
import "./styles/Footer.css";
import "./styles/ScrollIndicator.css";
import "./styles/FloatingIcons.css";

const faviconLink =
  document.querySelector("link[rel='icon']") ||
  document.createElement("link");

faviconLink.rel = "icon";
faviconLink.type = "image/svg+xml";
faviconLink.href = favicon;

document.head.appendChild(faviconLink);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);