const Joi = require('@hapi/joi');

const uploadWorksFormValidator = async (fields, files) => {
	return new Promise(async (resolve, reject) => {
		const { name, price } = fields;
		const {name: fileName, size} = files.photo;
		const schema = Joi.object().keys({
			name: Joi.string().min(3).max(40).required(),
			price: Joi.string().min(3).max(40).required(),
			fileName: Joi.string().min(2).max(10).required(),
			size: Joi.number().min(16).max(1024 * 1024 * 3)

		});

		try {
			await schema.validateAsync({ name, price, fileName, size });
			resolve({status: "success", message: "Валидация пройдена"})
		}
		catch (err) {
			reject({status: "err", message: err});
		}
	})
};

module.exports = uploadWorksFormValidator;