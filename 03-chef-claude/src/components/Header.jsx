import logoImg from "../assets/images/Chef Claude Icon.svg";

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <img src={logoImg} alt="Chef Claude Logo" className="main-logo" />
        <h1 className="main-title">Chef Claude</h1>
      </nav>
    </header>
  );
}
