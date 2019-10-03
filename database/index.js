const data = {};
data.skills = require('./skills');
data.products = require('./products');
data.social = require('./social');

DATABASE.on('skills/get', response => {
    console.log(data.skills);
    response.reply(data.skills);
});

DATABASE.on('products/get', response => {
    response.reply(data.products);
});
DATABASE.on('social/get', response => {
    response.reply(data.social);
});




DATABASE.on('social/get', response => {
    response.reply(data);
});




/*
DATABASE.on('posts/count', response => {
    response.reply(posts.length);
})

DATABASE.on('posts/add', response => {
    const {
        title,
        content,
        created_at
    } = response.data;

    posts.push({ title, content, created_at });

    response.reply(true);
})*/
