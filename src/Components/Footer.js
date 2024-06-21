import React from 'react'
import PdfViewer from './PdfViewer'
import ImoCircular from './data/ImoCircular.pdf';
import DocumentViewer from './DocumentViewer';
import Imoformat from './data/Template_Proposal.docx';
import logo from './images/logo.png';



function Footer() {
  return (
    <>
        <div className="bg-blue-300 w-full">
            <div className="container mx-auto p-4">
                    <h6 className='text-xl text-white text-end'>For Details Contact</h6>
                <div className="w-full mt-2 flex text-center">
                    <div className="flex-1 flex flex-col md:flex-row justify-around">
                        <div className="md:flex-1 py-2">
                            <a href="https://mrc.foundationforuda.in/capt-sudhir-subedhar/" className='text-white hover:text-blue-600 text-xl font-bold' target='blank'>Capt. Sudhir Subedar</a>
                        </div>
                        <div className="md:flex-1 py-2">
                            <a href="https://www.linkedin.com/in/capt-amresh-kumar-jha-36408637/" className='text-white hover:text-blue-600 text-xl font-bold' target='blank'>Capt. Amresh Kumar Jha</a>
                        </div>
                        <div className="md:flex-1 py-2">
                            <a href="https://www.linkedin.com/in/jaiswala/" className='text-white hover:text-blue-600 text-xl font-bold' target='blank'>Amit Jaiswal</a>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer