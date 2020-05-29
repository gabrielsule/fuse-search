# fuseSearch
Es una POC de NodeJS que utiliza la librería fuse.js

### Inicializar proyecto
```bash
npm init -y
```

### Instalación
```bash
npm i fuse.js
npm i yargs
```

### JSON de ejemplo
```javascript
[{
    "sector": "desarrollo",
    "lider": "gervasio",
    "empleados": 8
}, {
    "sector": "testing",
    "lider": "german",
    "empleados": 3
}, {
    "sector": "ux",
    "lider": "florinda",
    "empleados": 4
}, {
    "sector": "ventas",
    "lider": "analia",
    "empleados": 3
}]
```

### Código
```javascript
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
```

### Ejecución
**help**
```bash
node index.js --help
```

**consulta**
```bash
node index.js -s ger

o

node index.js --search ger
```