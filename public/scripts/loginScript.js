const formLogin = document.querySelector('#formLogin');

if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { login1, password1, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login1: login1.value,
        password1: password1.value,
      }),
    });
    const data = await res.json();
    if (data.message === ' вы авторизованы, ура!') {
      window.location.assign('/');
    } else {
      document.querySelector('.errorLog').innerHTML = data.message;
    }
  });
}
