import React from 'react';

function PageTwo(props) {
  return (
    <main>
      <h1>Page {props.match.params.itemId}</h1>

      <p>Lrem ipsum </p>
      <p>Lrem ipsum </p>
      <p>Lrem ipsum </p>
    </main>
  );
}

export default PageTwo;
