const express = require('express');
const format = require('date-format');

const app = express();
const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello!</h1>');
});
app.get('/api/v1/instagram', (req, res) => {
    const social = {
        username: '@username',
        followers: 66,
        follows: 23,
        date: Date.now(),
    };

    res.status(200).json(social);
});

app.get('/api/v1/facebook', (req, res) => {
    const social = {
        username: 'Username',
        followers: 66,
        follows: 23,
        date: Date.now(),
    };

    res.status(200).json(social);
});

app.get('/api/v1/linkedin', (req, res) => {
    const social = {
        username: 'Username | UX designer',
        followers: 66,
        follows: 23,
        date: format.asString('dd.MM.yyyy - hh:mm:ss'),
    };

    res.status(200).json(social);
});

app.get('/api/v1/:whatever', (req, res) => {
    const whatever = req.params.whatever;

    res.status(404).json({ message: `${whatever} not found!` });
});

app.listen(PORT, () => console.log('Server running...'));
