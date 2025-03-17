const Tools = {
	products_endpoint: 'https://fakestoreapi.com/products',
	users_endpoint: 'https://fakestoreapi.com/users',
	fetch(url, callback) {
		fetch(url).then(res => res.json()).then(res => {
			if (typeof callback === 'function') {
				callback(res);
			}
		})
	}
}

export default Tools;