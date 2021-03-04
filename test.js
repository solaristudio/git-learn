const checkEquals = require('assert').deepStrictEqual
const { getProp } = require('./prop')
const { identity, not } = require('./lib')

const testGetProp = () => {
	const o = { name: '@Object'}
	const expected = '@Object'
	const actual = getProp(o, 'name')
	checkEquals(actual, expected)
}

const testIdentity = () => {
	const expected = '@@value'
	const actual = identity('@@value')
	checkEquals(actual, expected)
}

const testNot = () => {
	const expected = false
	const actual = not(true)
	checkEquals(actual, expected)
}

testGetProp()
testIdentity()
testNot()

console.log('Tests are successful!')
