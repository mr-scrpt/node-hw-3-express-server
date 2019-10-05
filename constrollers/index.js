const validForm = require('../libs/validators/form');
const sendMailer = require('../libs/sendMail');

module.exports.indexPage = async (req, res)=>{


  try {
    const msgsemail = req.flash('msgsemail');
    console.log(msgsemail);
    const data = await ENGINE.emit('index/get');
    msgsemail !== undefined ? data.msgsemail = msgsemail : null;
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


module.exports.sendMsg = async(req, res) => {

  const {name, email, message} = req.body;
  const valid = await validForm(name, email, message);

  if(valid.name === 'ValidationError'){
    const errMessage = valid.message;
    req.flash('msgsemail', errMessage);
    res.redirect(`/`)
  }

  try {
    await sendMailer({name, email, message});
    req.flash('msgsemail', 'Успех');

    res.redirect(`/`)
  }catch (err) {
    throw new Error(`Ошибка отправки почты ${err}`);
  }



};