import "./Logo.css";
import logo from "../assets/rmageddon26.png";

export default function Logo() {
  return (
    <a
      href="https://www.yoursite.com"
      target="_blank"
      rel="noopener noreferrer"
      className="logo"
    >
      <img src={logo} alt="RMAGEDDON Logo" />
    </a>
  );
}
