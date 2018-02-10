import Test from './templates/Test'

export default (rurl) => {
	switch (rurl) {
		case '/test': return Test
		default: return Test
	}
}
