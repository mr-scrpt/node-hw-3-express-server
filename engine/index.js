ENGINE.on('index/get', async response => {
    try {
        const skills = await DATABASE.emit('skills/get', {});
        const products = await DATABASE.emit('products/get', {});
        const social = await DATABASE.emit('social/get', {});
        const data = {skills, products, social};
        console.log(data);
        response.reply(data)
    }catch (err) {
        response.replyErr(err);
    }
});

ENGINE.on('login/get', async response => {
    try {
        const social = await DATABASE.emit('social/get', {});
        const data = {social};
        //console.log(data);
        response.reply(data)
    }catch (err) {
        response.replyErr(err);
    }
});
