export const MainContent = (props) => {
  // Set all paragraph text between <p></p> tags.

  function mapAllParagraphs() {
    return props.paragraphsArray.map((paragraph) => {
      return <p>{paragraph}</p>;
    });
  }

  return (
    <div>
      <h1>{props.title}</h1>
      {mapAllParagraphs()}
    </div>
  );
};

export function getIndexPageContent() {
  return (
    <MainContent
      title={'Index Page'}
      paragraphsArray={['Blah blah blah, etc', `Here's a second paragraph.`, `...and a third...`]}
    />
  );
}
