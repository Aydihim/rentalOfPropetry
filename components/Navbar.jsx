const React = require('react');
const Reg = require('./Reg');

function Navbar({ nameUser }) {
  console.log(nameUser);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <img
        className="ms-5"
        src="https://englex.ru/app/uploads/how-to-book-the-best-accommodation.png"
        width="80px"
      />
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          company
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#map">
                контакты
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                категории
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/houses">
                    дома
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/appartments">
                    квартиры
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/rooms">
                    комнаты
                  </a>
                </li>
                {/* <li>
                  <Reg />
                </li> */}
              </ul>
            </li>

            {nameUser ? (
              <>
                <div className="d-flex">
                  <li className="nav-item" style={{ marginLeft: '700px' }}>
                    <h6 className="userName nav-link">Привет {nameUser}</h6>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      избранное
                    </a>
                  </li>
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                      width="65px"
                    />
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      выйти
                    </a>
                  </li>
                </div>
              </>
            ) : (
              <>
                <li>
                  <input name="login" type="text" placeholder="логин" />
                  <input name="password" type="password" placeholder="пароль" />
                  <a href="#">войти</a>
                </li>
                <li>
                  <Reg />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
module.exports = Navbar;
