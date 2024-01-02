(() => {
	divContent = document.querySelector('#divContent');
	let message;
	for(let i = 1; i <= 100; i++){
		message = (i % 3 === 0 && i % 5 === 0) ? 'fizzbuzz' : 
				  (i % 5 === 0) ? 'buzz' :
				  (i % 3 === 0) ? 'fizz' : `${i}`; 
		divContent.innerHTML += `${message} <br>`;
		console.log(message);
	}
})();
