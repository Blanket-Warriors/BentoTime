import "isomorphic-fetch";

function handleResponse() {
	if (response.status >= 400) {
		var json = response.json();
		return json.then(err => { throw err; });
	}

	if (response.status === 204) {
		return response;
	}

	return response.json();
}


export function get(url) {
	return fetch(url).then(handleResponse);
}

export function post(url, body, headers) {
	const data = { method: "POST" };

	if (body != null) {
		data.body = JSON.stringify(body);
	}

	if (headers != null) {
		data.headers = headers;
	}

	return fetch(url, data).then(handleResponse);
}
