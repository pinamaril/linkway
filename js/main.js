function checkParams() {
		const urlParams = new URLSearchParams(window.location.search);
		const qValue = urlParams.get('q');
		
		if(qValue) {
			direct(qValue);
		}
}

function direct(qValue) {
		const error = document.querySelector('.error');
		let keyStatus = false;

		fetch('/url-storage.json')
				.then(response => response.json())
				.then(data => {
						for(let i = 0; i < Object.keys(data).length; i++) {
								if(qValue.toLowerCase() === data[i].key){
									keyStatus = true;

									/* Redirect */
									window.location.href = data[i].direct;
									
									break;
								}
						}

						if (!keyStatus) {
								error.style.display = 'block';
						}
				})
				.catch(error => console.error(error));
}

function getRandomString() {
		const stringText = document.querySelector('.string-text');

		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';

		for (let i = 0; i < 6; i++) {
				result += characters.charAt(Math.floor(Math.random() * characters.length));
		}

	stringText.innerHTML = 'Random stringnya adalah: ' + result;
}

function getYearNow() {
		const footerYear = document.querySelector('.footer__copy span');
		const d = new Date();
		let year = d.getFullYear();

		footerYear.innerHTML = year;
}

getYearNow();
