import ajax from './ajax'

const test = () => {
	return ajax('/test', 'get', {})
}

export {
	test
}
