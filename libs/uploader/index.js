const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const validator = require('../../libs/validators/uploadWorksFormValidator');
const countFile = require('../../libs/countFile');
const {promisify} = require('util');
const rename = promisify(fs.rename);
const unlink = promisify(fs.unlinkSync);


const uploader = (req, res) => {
	return new Promise((resolve, reject) => {

		const form = new formidable.IncomingForm();
		let upload = path.normalize(process.env.UP_LOAD_WORKS_PATH);

		if (!fs.existsSync(upload)) {
			fs.mkdirSync(upload);
		}

		form.uploadDir = path.join(process.cwd(), upload);


			form.parse(req, async (err, fields, files) => {
				try {
					if(err){
						reject({status: "err", message: err});
					}

					await validator(fields, files);
					const count = await countFile(upload);
					const tempFileDest = files.photo.path;
					//const originalFileName = files.photo.name;
					const originalFileExt = path.extname(files.photo.name);
					const target = path.join(upload, `Work${count}.${originalFileExt}`);

					await rename(tempFileDest, target);

					resolve({status: "success", message: "Обработка формы успешна"});
				}catch (e) {

					await unlink(files.photo.path);
					reject({status: "err", message: e.message});
				}

			});



	});



};

module.exports = uploader;
