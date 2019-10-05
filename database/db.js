const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapterProducts = new FileSync('./database/products.json');
const adapterSkills = new FileSync('./database/skills.json');
const adapterSocial = new FileSync('./database/social.json');

const dbProducts = low(adapterProducts);
const dbSkills = low(adapterSkills);
const dbSocial = low(adapterSocial);

module.exports.dbProducts = dbProducts;
module.exports.dbSkills = dbSkills;
module.exports.dbSocial = dbSocial;