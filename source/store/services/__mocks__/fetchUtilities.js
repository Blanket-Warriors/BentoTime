export function get(url, body, headers) {
	return Promise.resolve({
		data: { url, body, headers }
	});
}

export function post(url, body, headers) {
	return Promise.resolve({
		data: { url, body, headers }
	});
}

export function put(url, body, headers) {
	return Promise.resolve({
		data: { url, body, headers }
	});
}
