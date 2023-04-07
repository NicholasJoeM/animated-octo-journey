console.log("Nicholas Joseph");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const catImage = document.getElementById('cat-image');

catImage.addEventListener('mouseover', () => {
  alert('You are looking great today!');
});
