const PORT = process.env.PORT || 3000;

module.exports = {
	// Secret key for JWT signing and encryption
	'secret': 'super secret passphrase',
	// Database connection information
	'database': 'mongodb://calvinlang:calvinlang@ds133328.mlab.com:33328/savernodeauth',
	'port': PORT
};
