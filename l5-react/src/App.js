import {useState} from 'react';
import {Header} from './components/header';
import {getIndexPageContent, MainContent} from './components/mainContent';

function App() {
  // useState: Come back to this code block later. It will be important, but
  // not as the first React thing you learn. ;)
  // Our main content is kept dynamically in a variable mainContent.
  // setContent is a function which allows us to change the variable.
  // We initialise this by calling useState().
  // At the moment, the state that we're using (that we're assigning to mainContent)
  // is whatever the getIndexpageContent() returns.
  const [mainContent, setContent] = useState(getIndexPageContent());

  function setMainContent(mainContentComponent) {
    setContent(mainContentComponent);
  }

  return (
    <div className='App'>
      {/* We can pass a function into our other props so it may be called from there.
      Normally, our 'setContent' useState function is limited to the scope of this component.
      But, by wrapping it in another function (setMainContent()), we can pass
      that function through to other components, allowing them to set the state of this component. */}
      <Header setContentFunction={setMainContent} />
      <main>
        <section id='mainContent'>
          {/* Here we are rendering whatever content we have set in the mainContent variable above,
          as initialised with useState */}
          {mainContent}
        </section>
      </main>
    </div>
  );
}

export default App;
