ENGINE.on('index/get', async response => {
    try {
        const data = await DATABASE.emit('allData/get', {});
        response.reply(data)
    }catch (err) {
        response.replyErr(err);
    }
});

ENGINE.on('login/get', async response => {
    try {
        const data = await DATABASE.emit('social/get', {});
        response.reply(data)
    }catch (err) {
        response.replyErr(err);
    }
});
