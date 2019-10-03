ENGINE.on('index/get', async response => {
    try {
        const complex = await Promise.all(
            DATABASE.emit('skills/get'),
            DATABASE.emit('products/get'),
            DATABASE.emit('social/get')
        );

        const skills = complex[0];
        const products = complex[1];
        const social = complex[2];

       /* const skills = await DATABASE.emit('skills/get');
        const products = await DATABASE.emit('products/get');
        const social = await DATABASE.emit('social/get');*/

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
