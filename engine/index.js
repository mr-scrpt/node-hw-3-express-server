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

ENGINE.on('admin/get', async response => {
    try {
        const skills = await DATABASE.emit('skills/get');
        const data = {skills};
        response.reply(data)
    }catch (err) {

    }
});

ENGINE.on('admin/skillsEdited', async response => {
    try {
        const data = await DATABASE.emit('skills/edited', response.data);

        response.reply(data)
    }catch (err) {

    }
});
