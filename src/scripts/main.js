import examplePartial from '../partials/example_partial.hbs';

document.querySelector("#app").innerHTML = examplePartial({ "hello": "Hello World!" });