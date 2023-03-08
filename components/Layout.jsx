const React = require('react');
const Navbar = require('./Navbar');
const Footer = require('./Footer');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <title>{title}</title>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

module.exports = Layout;
