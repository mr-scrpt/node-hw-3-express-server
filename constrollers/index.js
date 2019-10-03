
module.exports.indexPage = async (req, res)=>{
  try {
    const data = await ENGINE.emit('index/get');
    res.render('pages/index', { title: 'Главная', ...data })
  }catch (err) {
    res.render('error', {message: err.message})
  }
};

module.exports.loginPage = async (req, res)=>{
  try {
    const data = await ENGINE.emit('login/get');
    res.render('pages/login', { title: 'Авторизация', ...data })
  }catch (err) {
    res.render('error', {message: err.message})
  }
};
