import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <div className="app">
    <button className="open-modal" onClick={() => setIsModalOpen(true)}>Open modal</button>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    </Modal>
  </div>
  );
}

export default App;
