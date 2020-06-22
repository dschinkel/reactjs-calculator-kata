
export default {
	files: ['test/**/*.spec.js', '!./test/compiler.js'],
	require: ['@babel/register', './test/compiler.js'],
	babel: true,
	verbose: true
};