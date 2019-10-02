
module.exports.indexPage = async (req, res)=>{

  try {
    data = await ENGINE.emit('index/get');
    res.render('pages/index', { title: 'Главная', ...data })
  }catch (err) {
    res.render('error', {message: err.message})
  }
};
