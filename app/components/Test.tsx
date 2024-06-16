// App.jsx
import React from 'react';
import { Button, Card, Modal } from 'magic-ui'; // Adjust import based on actual library

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1>My Magic UI App</h1>
      <Button className="mt-4" onClick={handleClick}>
        Click me
      </Button>
      <Card className="mt-4 p-4">
        <p>This is a Magic UI card.</p>
      </Card>
      <Modal isOpen={true} onClose={() => console.log('Modal closed')}>
        <p>This is a Magic UI modal.</p>
      </Modal>
    </div>
  );
}

export default App;
