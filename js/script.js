/* const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

 */



let button = document.querySelector('#chk')
button.addEventListener ('click', function(){
	let body = document.querySelector('.light-mode');
	let header = document.querySelector('.bg-gradient');
	let pathTop = document.querySelector('.path-top');
	let path = document.querySelector('.path');
	let pathMid = document.querySelector('.path-mid');
	let pathMid_1 = document.querySelector('.path-mid1');
	let button = document.querySelector('.btn-primary-color')
	let footer = document.querySelector('.footer');
	
	body.classList.toggle('dark');
	header.classList.toggle('header-dark');
	path.classList.toggle('header-dark');
	pathTop.classList.toggle('header-dark');
	pathMid.classList.toggle('header-dark');
	pathMid_1.classList.toggle('header-dark');
	button.classList.toggle('button-dark');
	footer.classList.toggle('header-dark');
})


