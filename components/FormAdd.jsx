const React = require('react');
const Layout = require('./Layout');

function FormAdd({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <form
          action="/addnote"
          method="POST"
          id="formAdd"
          className="row g-3 needs-validation"
          noValidate
          style={{
            width: '40rem',
            position: 'absolute',
            top: '20%',
            left: '27%',
          }}
        >
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              Наименование
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              name="title"
              required
            />
            <div className="invalid-feedback">Пожалуйста, заполните поле</div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom02" className="form-label">
              Фото
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              name="img"
              required
            />
            <div className="invalid-feedback">Пожалуйста, заполните поле</div>
          </div>
          <div className="col-md-5">
            <label for="validationCustom03" className="form-label">
              Категория
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value="" id="3">
                Комната...
              </option>
              <option selected disabled value="" id="2">
                Квартира...
              </option>
              <option selected disabled value="" id="1">
                Дом
              </option>
            </select>
            <div className="invalid-feedback">Пожалуйста, заполните поле</div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom04" className="form-label">
              Цена
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              name="price"
              required
            />
            <div className="invalid-feedback">Пожалуйста, заполните поле</div>
          </div>
          <div className="col-md-5">
            <label for="validationCustom05" className="form-label">
              Инфо
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              name="info"
              required
            />
            <div className="invalid-feedback">Пожалуйста, заполните поле</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom06" className="form-label">
              Адрес
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              name="address"
              required
            />
            <div className="invalid-feedback">Пожалуйста, заполните поле</div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Добавить
            </button>
          </div>

          <div>
            <h2 classNameName="done"></h2>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = FormAdd;
