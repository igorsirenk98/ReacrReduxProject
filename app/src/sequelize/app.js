const express = require('express');
const List = require('./models/list.js')

const app = express();

app.get('/', (req, res) => {
    List.findAll()
        .then(list => console.log(JSON.stringify(list)))
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));