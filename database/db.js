const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapterProducts = new FileSync('./database/products.json'); //./database/products.json
const adapterSkills = new FileSync('./database/skills.json');
const adapterSocial = new FileSync('./database/social.json');

//const test = new FileSync('./database/test-db.json');

const dbProducts = low(adapterProducts);
const dbSkills = low(adapterSkills);
const dbSocial = low(adapterSocial);
//const dbTest = low(test);

module.exports.dbProducts = dbProducts;
module.exports.dbSkills = dbSkills;
module.exports.dbSocial = dbSocial;
//module.exports.dbTest = dbTest;