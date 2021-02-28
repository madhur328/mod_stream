const express = require('express');
const got = require('got');
const stream = require('stream')
const { promisify } = require('util');

var server = express()
const port = 3000;
const pipeline = promisify(stream.pipeline);

let url = 'https://mnmlist.com/'
let path = 'html_source'

server.get('/get_source/', (req, res) => {
    let stream = await pipeline(
        got.stream(url),
        fs.createWriteStream(path + '.html'),
    )
    res.send(stream)
})

server.listen(port, hostname, () => {
    console.log(`listening at port ${port}`)
})
