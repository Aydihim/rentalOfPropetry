const React = require('react');
const Layout = require('./Layout');

const StudentParams = ({ student, title, userName }) => {
  return (
    <Layout title={title} userName={userName}>
      <div className="card" style={{ width: '18rem' }}>
        <p>полная инфа</p>
        <img src={student.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
        </div>
      </div>
    </Layout>
  );
};

module.exports = StudentParams;
