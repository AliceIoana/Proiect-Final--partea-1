import BurgerMenu from "../BurgerMenu/burger";

const menuBtn = document.querySelectorAll(".nav-item");
const iconEl = document.querySelectorAll(".open");

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="logo">
        Logo
      </a>
      <div className="show">
        <BurgerMenu
          onClick={() => {
            iconEl === "open"
              ? (menuBtn.style.display = "block")
              : (menuBtn.style.display = "none");
          }}
        />
        <ul className="menu-btn">
          <li>
            <a href="#" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
