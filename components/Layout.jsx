const React = require('react');
const Navbar = require('./Navbar');
const Footer = require('./Footer');
const Reg = require('./Reg');
const Login = require('./Login');

function Layout({ title, children, userName, categories }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/modal.css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/modals/" />

        <link rel="stylesheet" href="style.css" />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        />

        <script defer src="/scripts/regScript.js" />
        <script defer src="/scripts/loginScript.js" />

        <script
          src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a9574d29-a9a4-4ce6-b3bf-99919499ad18"
          type="text/javascript"
        />
        <script defer src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript" />
        <script defer src="multiroute_custom_balloon_layout.js" type="text/javascript" />
        <script defer src="/Js/api.js" />
        <title>{title}</title>
      </head>
      <body>
        <Login />
        <Reg />
        <Navbar userName={userName} categories={categories} />

        {children}
        <Footer />
      </body>
    </html>
  );
}

module.exports = Layout;
