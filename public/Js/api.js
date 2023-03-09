function init() {
  let myMap = new ymaps.Map('map', {
    center: [59.943784918875735, 30.360148244983872],
    zoom: 17,
    controls: [],
  });
  let placemark = new ymaps.Placemark(
    [59.943784918875735, 30.360148244983872],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2838/2838709.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44],
    }
  );

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  myMap.geoObjects.add(placemark);
}

ymaps.ready(init);
