import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <div className="nav-header">
            <h1>ImmResources</h1>
            <p>For the undocumented/immigrant communities in NYC</p>
        </div>
        <ul className="nav-links">
          <li className="home-link" key="home-button">
            <Link to="/"> Home</Link>
        </li>
        <li className="stu-link" key="stu-button">
            <Link to="/students"> Students </Link>
        </li>
        <li className="adu-link" key="adu-button">
            <Link to="/"> Adults </Link></li>
        <li className="ally-link" key="ally-button">
            <Link to="/"> Allies </Link>
        </li>
        <li className="mission-link" key="mission-button">
            <Link to="/"> Mission </Link>
        </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;