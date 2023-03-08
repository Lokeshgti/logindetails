const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get('username');

fetch('https://sheetdb.io/api/v1/niqgowwro7cea/search?username=' + username)
	.then(response => response.json())
	.then(data => {
		if (data.length > 0) {
			const user = data[0];
			// Get the user data div element
// Get the user data div element
const userDataDiv = document.getElementById("userDataDiv");

// Create the HTML code for the table using the user data
const tableHtml = `
<table>
<tr>
<td>Personal Information</td><td>&nbsp;</td>
</tr>
<td>Name</td>
<td>${user.name}</td>
</tr>
<tr>
<td>Mobile</td>
<td>${user.mobile}</td>
</tr>
<tr>
<td>Father Name</td>
<td>${user.fathername}</td>
</tr>
<tr>
<td>Mother Name</td>
<td>${user.mothername}</td>
</tr>
<tr>
<td>Mail</td>
<td>${user.mail}</td>
</tr>
<tr>
<td>Pan No</td>
<td>${user.pan}</td>
</tr>
<tr>
<td>Aadhar No</td>
<td>${user.aadhar}</td>
</tr>
<tr>
<td>Date of birth</td>
<td>${user.dob}</td>
</tr>
<tr>
<td>Address</td>
<td>${user.address}</td>
</tr>
<tr>
<td>Professional Information</td><td>&nbsp;</td>
</tr>
<tr>
<td>Employee Id</td>
<td>${user.empid}</td>
</tr>
<tr>
<td>Official Mail</td>
<td>${user.officemail}</td>
</tr>
<tr>
<td>Designation</td>
<td>${user.designation}</td>
</tr>
<tr>
<td>Date of join</td>
<td>${user.Doj}</td>
</tr>
<tr>
<td>Emergency Contact</td><td>&nbsp;</td>
</tr>
<tr>
<td>Name</td>
<td>${user.ename}</td>
</tr>
<tr>
<td>Relation</td>
<td>${user.Relation}</td>
</tr>
<tr>
<td>Mobile No</td>
<td>${user.poimobile}</td>
</tr>

</table>
`;

// Set the innerHTML of the user data div element to the table HTML code
userDataDiv.innerHTML = tableHtml;
// form.reset();
// userDataDiv.appendChild(table);

		} else {
			userelse.innerHTML = "User not found.";
		}
	})
	.catch(error => {
		console.error(error);
		userDataDiv.innerHTML = "Error occurred while fetching user data.";
	});
	// .then(data => {
		// if (data.length > 0) {
		// 	const user = data[0];
		// 	document.getElementById('username').textContent = user.username;
		// 	document.getElementById('name').textContent = user.name;
		// 	document.getElementById('email').textContent = user.email;
		// 	document.getElementById('phone').textContent = user.phone;
		// }
		
	// })
	// .catch(error => console.error(error));
