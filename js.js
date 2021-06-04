function fetchData(){
	fetch("https://reqres.in/api/users")
	.then(response=>{
		if (!response.ok) {
			throw Error("ERROR");
		}
		return response.json();
	})
	.then(data => {
		console.log(data.data);
		const html = data.data
		.map(user =>{
			
			return `
			<div class="user col-xl-3">
			<a href="${user.id}.html">
			<p><img src="${user.avatar}" alt="${user.first_name}" /></p>
			<p>Name: ${user.first_name} ${user.last_name}</p>
			<p>Email: ${user.email}</p>
			</a>
			</div>
			`
		})
		.join("");
		console.log(html)
		document.querySelector("#one").insertAdjacentHTML("afterbegin", html);
	})
	.catch(error =>{
		console.log(error);
	});
}

fetchData();

