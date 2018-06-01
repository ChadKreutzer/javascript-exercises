const replacer = (match, p1, p2, p3, offset, string) => (p1) ? `${p2}${p1}ay` : `${p3}ay`;

function translate(str) {
	const pigizer = /(^\w?qu|^[^aeiouy]+)(\w+)|(\w+)/;
	return str
		.split(' ')
		.map(word => word.replace(pigizer, replacer))
		.join(' ');
}


module.exports = {
	translate
};
