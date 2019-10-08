const fs = require('fs');

const countFile = async (dir) =>{
	const files = fs.readdirSync(dir);
	return files.length;
};

module.exports = countFile;