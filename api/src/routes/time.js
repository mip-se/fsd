module.exports = function(req, res) {
    // different timezone - to see time difference (client)
    const str = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
    });
    const seconds = Math.floor(new Date(str).getTime() / 1000);
    const body = {
        epoch: seconds,
    };

    res.send(body);
};
