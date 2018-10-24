# 🥧 Vanilla Pie
> A starting point for a vanilla JS web application, with server/client-side handlebars templating, bundling, ES6 & PostCSS.

## Why?

I wanted a quick way to set up a light website with modern web technologies, that was as vanilla as possible. No frameworks, no bulky javascript libraries, just plain javascript and a few nice hacks. But, it can still act as a full single-page application with JS DOM manipulating using Handlebars templates.

## What does it do?

Just a little bit of code to help fill you up with delicious vanilla goodness.

- `index.hbs` is rendered server-side by default for fast loading
- Handlebars partials can be directly imported to do direct DOM manipulation with templates (see `src/scripts/main.js` for an example)
- Fast bundling and hot-reloading with Parcel implemented by default (just run `yarn run start`)
- PostCSS and ES6 compiling is all included by default

The rest, my friend, is up to your creativity. Do you remember how to use regular JS?

## Serving suggestions

Fill out the `index.hbs` file with your essential site-wide code, then get started on implementing everything else in partials. You will want to insert the first page partial right in the `index.hbs` file using Handlebars (this will render into an `index.html` file when you build, so your users will see a fast loading first page).

Go nuts with your styles in the `styles/` folder, and your javascript in `scripts/`. Remember to import and use Handlebars templates to render your data in a predictable and DRY way, without having to go hands-on in the DOM. Just chuck some event listeners in there to have a totally rad reactive-ish SPA!

If you want multiple pages, either get a front-end router happening (simple to DIY this), or configure the scripts & Parcel so that it can spit out multiple HTML files.

## Still to do

[ ] Implement a build stage for final dev build
[ ] Probably put some new stuff in that I'll notice as I actually start using this