import { createElement } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";

const reactElement = Navbar();
// const menu = ["Home", "About", "Contact"];
// const reactElement = (
//   <ul>
//     {menu.map((menuItem) => {
//       return <li key={menuItem}>{menuItem}</li>;
//     })}
//   </ul>
// );

const rootElement = document.getElementById("app");
createRoot(rootElement).render(reactElement);
