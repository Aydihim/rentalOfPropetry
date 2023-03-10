const React = require('react');

function Login({ title }) {
  return (
    <div className="modal-body">
      <form action="/login" method="post" id="formLogin">
        <div
          className="modal fade"
          id="exampleModals"
          tabIndex="-1"
          aria-labelledby="exampleModalLabels"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Вход
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
                      Емайл мама/папа не собака:
                    </label>
                    <input type="text" className="form-control" id="recipient-name" name="login1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Секретный пароль 123:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="recipient-name"
                      name="password1"
                    />
                  </div>
                  <div>
                    <h2 className="errorLog"></h2>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Закрыть
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

module.exports = Login;
