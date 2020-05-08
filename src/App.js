import React from 'react';
import marked from 'marked';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
});

function App() {
  const [text, setText] = React.useState(localStorage.getItem('markdownData') || '');
  const markdownAsHtml = marked(text);

  return (
    <div>
      <h1 className="header">Remarkable</h1>
      <div className="main">
        <Editor text={text} handleTextChange={setText} />
        <Previewer data={markdownAsHtml} />
      </div>
    </div>
  );
}

export default App;
