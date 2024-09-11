export function createHeader(): HTMLElement {
  const header = document.createElement("header");
  header.className = "menu";

  const logo = document.createElement("span");
  logo.textContent = "Logo";

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const menuItems = ["Home", "About", "Services", "Contact"];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}
