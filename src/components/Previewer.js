import React from 'react';

function Previewer({ data }) {
  return (
    <div id="preview" dangerouslySetInnerHTML={{__html: data}} />
  );
}

export default Previewer;
