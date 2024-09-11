import "./style.scss";
import "./script";
import { createHeader } from "./header";

document.addEventListener("DOMContentLoaded", () => {
  const heroTop = document.querySelector(".hero-top");
  if (heroTop) {
    const header = createHeader();
    heroTop.insertBefore(header, heroTop.firstChild);
  }
});
