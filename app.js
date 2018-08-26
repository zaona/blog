const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Blog');
})

app.listen(3000, err => {
    if (err == null) {
        console.log('服务器启动成功');
    }
})