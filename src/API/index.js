import ajax from './ajax'

const test = () => {
	return ajax('/test', 'get', {a: 1, b: 2})
}

export {
	test
}
