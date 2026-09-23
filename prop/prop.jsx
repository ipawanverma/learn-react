// In React, children is a special prop that lets a component receive whatever you put between its opening and closing tags.
// children is a special React prop containing the JSX/content passed between a component's opening and closing tags.

// Everything inside <Card>...</Card> becomes the children prop.

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Hello Pawan</h2>
      <p>This is inside the card.</p>
    </Card>
  );
}
