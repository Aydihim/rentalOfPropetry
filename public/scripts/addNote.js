const formAdd = document.querySelector('#formAdd');
const divProperties = document.querySelector('#divProperties');

if (formAdd) {
  formAdd.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, img, price, info, address, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        img: img.value,
        price: price.value,
        info: info.value,
        address: address.value,
      }),
    });
    const data = await res.json();
    document.querySelector('.done').innerHTML = data.message;
  });
}

if (divProperties) {
  divProperties.addEventListener('click', async (e) => {
    if (e.target.classList.contains('icons')) {
      const res = await fetch(`//${e.target.dataset.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.studentNum) {
        e.target.closest('.card').remove();
      }
    }
  });
}
