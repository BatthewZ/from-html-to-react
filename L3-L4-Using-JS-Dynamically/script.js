// Level 3: Using Javascript Dynamically

// Now we're looking at making the links a bit more dynamic. Instead of settings specific hardcoded content,
// we now have a function that takes in any kind of content.

function setDynamicContent(contentObject) {
  let formattedContent = `<h1>${contentObject.title}</h1>`;
  contentObject.paragraphs.forEach((paragraph) => (formattedContent += `<p>${paragraph}</p>`));
  document.getElementById('content').innerHTML = formattedContent;
}

// Here we have the html of the content that is going to change inside a script.
// Instead of having 3 different HTML files with the same "nav" and the same "header" and the same "body" structure etc,
// we only have the content itself which changes.

const indexPage = {
  title: 'Index Page',
  paragraphs: ['Blah blah blah etc', 'Main content goes here.'],
};

const link2 = {
  title: 'Link2 Page',
  paragraphs: [
    "Here's different text.",
    'As you can see if you look inside Dynamic-Version/script.js, each paragraph is its own string element inside an array.',
    'Adding more paragraphs are now automatically formatted underneath, and are automatically set within the appropriate tags.',
    'You can just keep adding paragraphs in here as strings, and they will be automatically formatted by our setDynamicContent() function.',
  ],
};

const link3 = {
  title: `Link3 Page`,
  paragraphs: ["Here's some different text again.", 'Similar to link3.'],
};

// LEVEL 4: Nearly React.

// ------- HOWEVER. If we want to go a step further... we can introduce dynamically creating links altogether.
// When we start thinking in THIS way, then we're starting to think more like a react developer.

// The below function is still written in vanilla javascript, and is not written in react.
// But, the thinking and design of it is very in alignment with react methodology.

// Essentially, I have created a function that 'creates a component' by writing in a block of HTML that
// uses dynamic variables that are given to it.

let linkId = 0;
function createLink(linkName, title, paragraphsArray) {
  // Format all of the paragraphs text for insertion into our document.write() below.
  let paragraphsText = '[';
  paragraphsArray.forEach((paragraph) => (paragraphsText += `"${paragraph}",`));
  paragraphsText += ']';

  document.write(`
    <script>
      // Format the information into JSON.
      const link${linkId} = {
        title: "${title}",
        paragraphs: ${paragraphsText},
      }
    </script>
    <!-- Then, create the link -->
    /
    <a href="#" onClick="setDynamicContent(link${linkId})">${linkName}</a>
  `);

  linkId++;
}
