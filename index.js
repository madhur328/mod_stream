const got = require('got')
const { Transform, Stream } = require('stream')
const util = require('util')
const fs = require("fs");
const path = require('path')

let stringInvert = (chunk) => {
    let out = ''
    for (let ch of chunk) {
        ch == ch.toUpperCase() ? out += ch.toLowerCase() : out += ch.toUpperCase()
    }
    return out
}
const fileUrl = './html_source.html'

const changeCaseStream = async (fileUrl) => {
    const read_stream = fs.createReadStream(fileUrl)
    let changeCase = new Transform()
    changeCase._transform = function (data, enc, cb) {
        cb(null, stringInvert(data.toString()));
    }
    read_stream.pipe(changeCase).pipe(process.stdout)
}
changeCaseStream(fileUrl);
