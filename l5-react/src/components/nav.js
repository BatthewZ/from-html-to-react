import {MainContent, getIndexPageContent} from './mainContent';

export const NavBar = (props) => {
  return (
    <div>
      <nav>
        <h2>
          {/* Note the syntax for onClick.
            This calls an anonymous arrow function of return type void.
            
            Here's the anonymous arrow function: 
            
            () => props.setContentFunction(getIndexPageContent())

            And here's the named function equivalent of the same thing:

            function myNamedFunction() {
                props.setContentFunction(getIndexPageContent());
            }

            They are two different syntaxes for achieving similar results in this case.
            
            */}
          <a href='#' onClick={() => props.setContentFunction(getIndexPageContent())}>
            Link 1
          </a>
          /
          {/* Here, you can see that we can define a MainContent component inside the onClick function.
          But, the syntax is MESSY if we choose to do it this way. In link1, we can see that we can have the
          content written elsewhere if we'd like, making the syntax in this component WAY cleaner.          
          */}
          <a
            href='#'
            onClick={() => {
              props.setContentFunction(
                <MainContent
                  title={'Link2 Page'}
                  paragraphsArray={['Paragraph 1 goes here.', 'Paragraph 2 goes here...']}
                />
              );
            }}
          >
            Link 2
          </a>
          /
          {/* Similar to link1, we can wrap our JSX syntax in a function elsewhere
          This makes the line far neater and easier to read. In this case, the function is
          just below, but within the same file. It doesn't need to be imported from a separate
          file.
         */}
          <a href='#' onClick={() => props.setContentFunction(link3Content())}>
            Link 3
          </a>
        </h2>
      </nav>
    </div>
  );
};

function link3Content() {
  return (
    <MainContent
      title={'Link3 Page'}
      paragraphsArray={[
        `Only one paragraph for this guy. It's still passed in as a single element in an array, though.`,
      ]}
    />
  );
}
