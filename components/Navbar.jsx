const React = require('react');

function Navbar({ user }) {
  return (
    <div id="container">
      <nav>
        <div id="logo">Company</div>
        <ul>
          <li>
            <a href="#">главная</a>
          </li>

          <li
            className="dropdown"
            onMouseOver="hover(this)"
            onMouseOut="out(this)"
          >
            <a href="#">
              категории &nbsp;<i className="fa fa-caret-down"></i>
            </a>
            <div className="dd">
              <div id="up_arrow"></div>
              <ul>
                <li>
                  <a href="#">дома</a>
                </li>
                <li>
                  <a href="#">квартиры</a>
                </li>
                <li>
                  <a href="#">комнаты</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">контакты</a>
          </li>

          {user ? (
            <>
              {' '}
              <li>
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
                <input name="login" type="text" placeholder="логин"></input>
                <input
                  name="password"
                  type="password"
                  placeholder="пароль"
                ></input>
                <a href="#">войти</a> {/*  роут на хоум */}
              </li>
              <li>
                <a href="#">зарегистрироваться</a>{' '}
                {/*  роут на форму регистрации */}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
module.exports = Navbar;
