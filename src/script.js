import { createElement, Component } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import HowWorks from "./components/HowWorks";
import Account from "./components/Account";
import Bag from "./components/Bag";

const reactElement = Navbar();
<Account />;
<Bag />;
console.log(<HowWorks />);

const rootElement = document.getElementById("app");
createRoot(rootElement).render(reactElement);
