import React from 'react';

function Editor({ text, handleTextChange}) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(e) {
    localStorage.setItem('markdownData', e.target.value);
    handleTextChange(e.target.value);
  }

  return (
    <textarea ref={inputRef} onChange={handleChange} id="editor" value={text} />
  );
}

export default Editor;
