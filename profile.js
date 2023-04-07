const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

colorBtn.addEventListener('click', () => {
  alert('My favorite color is blue!');
});

placeBtn.addEventListener('click', () => {
  alert('My favorite place is the beach!');
});

ritualBtn.addEventListener('click', () => {
  alert('My favorite ritual is making a cup of tea every morning.');
});
