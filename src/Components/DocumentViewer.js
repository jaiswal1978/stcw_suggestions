import React, { useState } from 'react';

const DocumentViewer = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleViewer = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',  // Adjusted for better visibility
    height: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const iframeStyle = {
    width: '100%',  // Use 100% of the modal for the iframe
    height: '100%',
    border: 'none'  // Removing the iframe border
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '16px',
    background: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  return (
    <div>
      <button onClick={toggleViewer} className="text-white hover:text-blue-600 text-xl font-bold ">
        {buttonText}
      </button>
      {isOpen && (
        <div style={modalStyle} onClick={closeModal}>
          <button style={closeButtonStyle} onClick={closeModal}>×</button>
          <iframe
            src="https://drive.google.com/file/d/1ib2foVx2WW2lM8NwuTE59qz-vqgAkivD/preview"
            style={iframeStyle}
            frameBorder="0"
            allow="autoplay"
            onClick={(e) => e.stopPropagation()} // Prevent clicks within the iframe from closing the modal
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
