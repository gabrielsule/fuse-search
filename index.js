const fs = require('fs');
const Fuse = require('fuse.js');
const yargs = require('yargs');

const args = yargs.options({
    s: {
        demand: true,
        alias: 'search',
        describe: 'buscar en JSON',
        string: true
    }
}).help().argv;

const data = JSON.parse(fs.readFileSync("data.json"));

const options = {
    includeScore: true,
    keys: ['lider', 'sector']
}

const fuse = new Fuse(data, options);
const result = fuse.search(args.s);

console.log(result);