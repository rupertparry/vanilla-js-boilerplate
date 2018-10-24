// import handlebars from 'handlebars';
// import { readFileSync } from 'fs'

// const template = readFileSync(__dirname + '/../views/partials/test.hbs', 'utf-8');
// console.log(template);

import examplePartial from '../partials/example_partial.hbs';
document.querySelector("#app").innerHTML = examplePartial({ "hello": "Hello World!" });