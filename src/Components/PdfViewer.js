import React, { useState } from 'react';

const PdfViewer = ({ buttonText, pdfUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleViewer = () => {
    setIsOpen(!isOpen);
  };

  const modalStyle = {
    position: 'absolute', // Use absolute positioning relative to the nearest positioned ancestor (usually the page itself)
    left: '50%', // Position the left edge of the modal at the center of the container
    top: '50%', // Position the top edge of the modal at the center of the container
    transform: 'translate(-50%, -50%)', // Shift the modal back by half its width and height to center it
    width: '100%', // Optional: Adjust width as per design requirement
    height: '100%', // Optional: Adjust height as per design requirement
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
    zIndex: 1000, // High z-index to ensure it is on top of other content
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally inside the modal
    justifyContent: 'center', // Center content vertically inside the modal
    padding: '20px', // Padding around the content inside the modal
  };

  const pdfStyle = {
    width: '80%',  // Use 80% of the modal area for PDF
    height: '90%',  // Use 90% of the modal area for PDF
    backgroundColor: 'white'  // Background for the PDF area
  };

  return (
    <div>
      <a onClick={toggleViewer} className="text-white hover:text-blue-600 text-xl font-bold ">
        {buttonText}
      </a>
      {isOpen && (
        <div style={modalStyle} onClick={() => setIsOpen(false)}>
          <embed
            src={pdfUrl}
            type="application/pdf"
            style={pdfStyle}
            onClick={(e) => e.stopPropagation()}  // Prevent click inside the PDF area from closing the modal
          />
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
