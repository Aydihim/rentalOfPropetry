const React = require('react');

function Footer({ nameUser }) {
  // console.log(nameUser);
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light fs-4"
                aria-current="page"
                href="/"
              >
                TEST ADDRESS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-4" href="/">
                TESTTEST@TEST
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = Footer;
