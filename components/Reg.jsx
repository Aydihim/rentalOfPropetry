const React = require('react');

function Reg({ title }) {
  return (
    <div className="modal-body">
      <form action="/reg" method="post" id="formReg">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          регистрация
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Регистрация
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      кого регистрируем?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Емайл мама/папа не собака:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="recipient-name"
                      name="login"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Секретный пароль 123:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="recipient-name"
                      name="password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Повторите секретный пароль 123:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="recipient-name"
                      name="password2"
                    />
                  </div>
                  <div>
                    <h2 className="error"></h2>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  жмяк
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

module.exports = Reg;
