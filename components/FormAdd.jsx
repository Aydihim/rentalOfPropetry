const React = require('react');
const Layout = require('./Layout');

const FormAdd = ({ title }) => {
  return (
    <Layout title={title}>
        <form action='/addnote' method ='POST' id='formAdd' class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Наименование</label>
    <input type="text" class="form-control" id="validationCustom03" name='title' required/>
    <div class="invalid-feedback">
    Пожалуйста, заполните поле
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom02" class="form-label">Фото</label>
    <input type="text" class="form-control" id="validationCustom03" name='img' required/>
    <div class="invalid-feedback">
    Пожалуйста, заполните поле
    </div>
  </div>
  <div class="col-md-5">
    <label for="validationCustom03" class="form-label">Категория</label>
    <select class="form-select" id="validationCustom04" required/>
      <option selected disabled value="" id='1'>Дом</option>
      <option selected disabled value="" id='2'>Квартира...</option>
      <option selected disabled value="" id='3'>Комната...</option>
    </select>
    <div class="invalid-feedback">
    Пожалуйста, заполните поле
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Цена</label>
    <input type="text" class="form-control" id="validationCustom03" name='price' required/>
    <div class="invalid-feedback">
    Пожалуйста, заполните поле
    </div>
  </div>
  <div class="col-md-5">
    <label for="validationCustom05" class="form-label">Инфо</label>
    <input type="text" class="form-control" id="validationCustom03"  name='info' required/>
    <div class="invalid-feedback">
    Пожалуйста, заполните поле
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom06" class="form-label">Адрес</label>
    <input type="text" class="form-control" id="validationCustom03" name='address' required/>
    <div class="invalid-feedback">
    Пожалуйста, заполните поле
    </div>
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Добавить</button>
  </div>

  <div>
        <h2 className="done"></h2>
      </div>
</form>
    </Layout>
  );
};

module.exports = FormAdd;