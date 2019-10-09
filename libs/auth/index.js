

const auth = (req) => {
	return new Promise((resolve, reject) => {
		const {email, password} = req.body;
		const etalonEmail = process.env.LOG_IN;
		const etalonPassword = process.env.PASS_WORD;

		(email === etalonEmail && password === etalonPassword)
			? resolve({status: "success", message: "Авторизация успешна"})
			: reject({status: "err", message: "Неверные данные авторизации"});

	});
};

module.exports = auth;