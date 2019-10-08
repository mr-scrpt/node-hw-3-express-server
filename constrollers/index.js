const validForm = require('../libs/validators/form');
const sendMailer = require('../libs/sendMail');
const uploader = require('../libs/uploader');
const auth = require('../libs/auth');

module.exports.indexPage = async (req, res)=>{


  try {
    const msgsemail = req.flash('msgsemail')[0];

    const data = await ENGINE.emit('index/get');

    res.render('pages/index', { title: 'Главная', msgsemail, ...data })
  }catch (err) {
    res.render('error', {message: err.message})
  }
};

module.exports.loginPage = async (req, res)=>{
  try {
    const data = await ENGINE.emit('login/get');
    const isLogged = req.flash('isLogged')[0];

    res.render('pages/login', { title: 'Авторизация', isLogged, ...data })
  }catch (err) {
    res.render('error', {message: err.message})
  }
};


module.exports.auth = async (req, res) => {
  try {
    await auth(req);
    res.redirect(`/admin`);
  }catch (e) {
    req.flash('isLogged', 'Неправильный логин или пароль!');
    res.redirect(`/login`);
  }

};

module.exports.sendMsg = async(req, res) => {

  const {name, email, message} = req.body;
  const valid = await validForm(name, email, message);

  if(valid.name === 'ValidationError'){
    const errMessage = valid.message;
    req.flash('msgsemail', errMessage);
    res.redirect(`/`);
    return false;
  }

  try {
    await sendMailer({name, email, message});
    req.flash('msgsemail', 'Успех');

    res.redirect(`/`)
  }catch (err) {
    throw new Error(`Ошибка отправки почты ${err}`);
  }



};

module.exports.adminPage = async (req, res) => {
  const msgskill = req.flash('msgskill')[0];
  const msgfile = req.flash('msgfile')[0];
  const isLogged = req.flash('isLogged');
  console.log(isLogged);
  try{
    const data = await ENGINE.emit('admin/get');
    res.render('pages/admin', { title: 'Авторизация', msgskill, msgfile, ...data })
  }catch (err) {
    res.render('error', {message: err.message})
  }
};

module.exports.skillsEdited = async (req, res) => {
  const form = JSON.parse(JSON.stringify(req.body));
  try{
    const data = await ENGINE.emit('admin/skillsEdited', form);
    req.flash('msgskill', data);
    res.redirect('/admin');
  }catch (err) {
    req.flash('msgskill', err);
    res.redirect('/admin');

  }
};

module.exports.uploadWorks = async (req, res) => {
  try{
    const {data} = await uploader(req, res);

    await ENGINE.emit('admin/addWork', data);

    req.flash('msgfile', 'Файл успешно загружен');
    res.redirect('/admin');
  }catch (err) {
    req.flash('msgfile', `Ошибка при загрузке файла ${err.message}`);
    res.redirect('/admin');

  }
};


