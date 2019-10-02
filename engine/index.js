ENGINE.on('index/get', async response => {
    try {
        const skills = await DATABASE.emit('skills/get', {});
        response.reply(skills)
    }catch (err) {
        response.replyErr(err);
    }
});


