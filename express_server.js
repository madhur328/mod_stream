const express = require('express');
const got = require('got');
const stream = require('stream')
const { promisify } = require('util');

var server = express()
const port = 3000;
const hostname = "0.0.0.0"
const pipeline = promisify(stream.pipeline);

let url = 'https://mnmlist.com/'
let path = 'html_source'

server.get(url, (req, res) => {
    let stream = await pipeline(
        got.stream(url),
        process.stdout(),
    )
    res.send(stream)
})

server.listen(port, hostname, () => {
    console.log(`listening at port ${port}`)
})
