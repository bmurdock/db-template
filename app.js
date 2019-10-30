const express = require('express');
const apiPort = 3444;

const api = express();

api.listen(apiPort, (err) =>
{
    if (err)
    {
        console.log('API failed to started: ', err);
        return;
    }
    console.log(`API server listening on port ${port}`);
});