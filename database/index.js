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