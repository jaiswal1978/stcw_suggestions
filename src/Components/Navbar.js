import React from 'react'
import PdfViewer from './PdfViewer'
import ImoCircular from './data/ImoCircular.pdf';
import DocumentViewer from './DocumentViewer';
import Imoformat from './data/Template_Proposal.docx';
import logo from './images/logo.png';



function Navbar() {
  return (
    <>
        <div className="bg-blue-300 w-full shadow-lg border border-gray-400">
            <div className="container mx-auto p-4">
                <div className="w-full mt-2 flex text-center">
                    <div className="flex-1 justify-around">
                        <a href="/">
                            <img src={logo} alt="Logo" className="max-w-xs px-5 my-auto" style={{height: '64px'}} />
                        </a>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row justify-around">
                        <div className="md:flex-1 py-2">
                            <PdfViewer buttonText="IMO Circular on STCW Revision" pdfUrl={ImoCircular}/>
                        </div>
                        <div className="md:flex-1 py-2">
                            <DocumentViewer buttonText="IMO Format for Suggestions" fileUrl={Imoformat} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar