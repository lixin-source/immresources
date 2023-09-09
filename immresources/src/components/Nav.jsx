import "./Components.css";

const Nav = () => {
  return (
    <div id='wholeNav'>
    <div className="titleHome"> 
        <h1>Resources for</h1>
    </div>
      {/* NAV */}
      <nav>
        {/* CHANGE TO ROUTES TO NEW PAGES */}
        <a>Students</a>
        <a>Adults</a>
        <a>Allies</a>
      </nav>
    </div>
  );
};

export default Nav;
