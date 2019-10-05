ENGINE.on('index/get', async response => {
    try {
        const [skills, products, social] = await Promise.all([
            DATABASE.emit('skills/get'),
            DATABASE.emit('products/get'),
            DATABASE.emit('social/get')
          ]
        );

        const data = {skills, products, social};

        response.reply(data)
    }catch (err) {
        response.replyErr(err);
    }
});

ENGINE.on('login/get', async response => {
    try {
        const social = await DATABASE.emit('social/get', {});
        const data = {social};
        response.reply(data)
    }catch (err) {
        response.replyErr(err);
    }
});

ENGINE.on('login/post', async response => {

});
