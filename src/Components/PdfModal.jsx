import { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfModal = () => {
    const [shown, setShown] = useState(false);

    return (
        <>
            {shown && (
                <div
                    style={{
                        backgroundColor: '#fff',
                        left: 0,
                        position: 'fixed',
                        top: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    <Worker>
                        <Viewer fileUrl="./ImoCircular.pdf" />
                    </Worker>
                </div>
            )}
            <button onClick={() => setShown(true)}>Open modal</button>
        </>
    );
};

export default PdfModal;
