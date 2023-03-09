const React = require('react');

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                контакты
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
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
              </ul>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <h3 className="userName">{user.name}</h3>
                </li>
                <li>
                  <a href="#">избранное</a>
                </li>
                <li>
                  <a href="#">выйти</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <input name="login" type="text" placeholder="логин" />
                  <input name="password" type="password" placeholder="пароль" />
                  <a href="#">войти</a> {/*  роут на хоум */}
                </li>
                <li>
                  <a href="#">зарегистрироваться</a>{' '}
                  {/*  роут на форму регистрации */}
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
