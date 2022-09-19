// Here's a function that sets html content inside our <section id="content"></section> tag.

function setContent(content) {
  document.getElementById('content').innerHTML = content;
}

// Here we have the html of the content that is going to change inside a script.
// Instead of having 3 different HTML files with the same "nav" and the same "header" and the same "body" structure etc,
// we only have the content itself which changes.

const indexPage = `<h1>Index Page</h1>
<p>Blah blah blah etc.</p>
<p>Main content goes here.</p>`;

const link2 = `<h1>Link2 Page</h1>
<p>Here's different text.</p>
<p>
  But, if you look inside the link2.html file, it is almost identical to index.html. There's a tonne of
  duplicated code.
</p>`;

const link3 = `<h1>Link3 Page</h1>
<p>Here's some different text again.</p>
<p>
  Again, if you look inside link3.html, it's got almost the same code as both index.html and link2.html. A lot
  of the code is duplicated, and unnecessarily so. Alright, we could reduce a lot of this using a javascript
  function, so head over to the HTML-and-JS folder and start it up again.
</p>`;
