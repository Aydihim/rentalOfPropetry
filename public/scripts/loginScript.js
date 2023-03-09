const loginBtn = document.querySelector('#formLogin');

if (loginBtn) {
  formReg.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { login1, password1, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login1.value,
        password: password1.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}
