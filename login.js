const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent default form submission

	const username = form.elements.username.value;
	const password = form.elements.password.value;

	fetch('https://sheetdb.io/api/v1/niqgowwro7cea/search?username=' + username + '&password=' + password)
		.then(response => response.json())
		.then(data => {
			if (data.length > 0) {
				window.location.href = 'details.html?username=' + username; // redirect to details page
			} else {
				alert('Invalid username or password!');
			}
		})
		.catch(error => console.error(error));
});
