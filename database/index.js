const {dbProducts, dbSkills, dbSocial} = require('./db');


DATABASE.on('skills/get', async response => {
  const skills = dbSkills.getState();
  response.reply(skills);
});

DATABASE.on('products/get', async response => {

  const products = dbProducts.getState();
  response.reply(products);
});
DATABASE.on('social/get', async response => {
  const social = dbSocial.getState();
  response.reply(social);
});

DATABASE.on('skills/edited', async response => {
  const skills = response.data;
  for(let skill in skills){
    if (skills.hasOwnProperty(skill)) {
      try {
        dbSkills.filter({ name: skill }).each((item) =>{
          if(skill === item.name && +skills[skill] !== item.number){
            item.number = +skills[skill];
          }
        }).write();
        response.reply({status: "success", message: "Данные обновлены"})
      }catch (err) {
        response.reply({status: "err", message: err.message})
      }


    }
  }

});
DATABASE.on('works/add', async response => {
  const work = response.data;
  //console.log(work);
  try {
    const res = dbProducts
			.push(work)
			.write();
    response.reply({status: "success", message: "Работа добавлена"})
  }catch (err) {
    console.log(err);
    response.reply({status: "err", message: err.message})
  }

});
