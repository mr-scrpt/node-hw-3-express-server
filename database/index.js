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
    console.log(skills[skill]);

    dbSkills.filter({ name: skill }).each((item) =>{
      if(skill === item.name && +skills[skill] !== item.number){
        item.number = +skills[skill];
      }
        //console.log(item.number, skill)).write()
    }).write()

  }
  /*dbSkills.filter({ name: skill }).each((item) =>{
				if(skills)
				console.log(item.number, skill)).write()
  } */

  /*skills.forEach(skill=>(
    dbSkills.filter({ name: skill.name }).each((item) => item.number = skill).write()
  ))
*/

});

