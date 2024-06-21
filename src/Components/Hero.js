import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Hero = ({ pdfUrl }) => {

    return (
        <>
        <div className="p-4 flex flex-col md:flex-row">
            <div className="md:flex-2/3 p-4">
                <div className='mb-3 md:mb-10'>
                    <h1 className="text-center text-4xl md:text-6xl lg:text-7xl mb-5 dm-serif-display-regular font-medium" >Your Voice, <span className='text-blue-600'>Our Future</span></h1>
                    <h2 className='text-2xl md:text-4xl text-gray-600 text-start md:text-center'>Contribute to Redefining STCW Standards Review.</h2>
                </div>
                <div className="text-xl sm:text-lg ">
                <p className='my-3'>
                    Great news, seafarers! The International Maritime Organization (IMO) is considering updates to the STCW, a review that typically occurs once every decade. They're inviting feedback and suggestions to refine the new STCW regulations.
                </p>
                <p className='my-3'>
                    This is your opportunity to contribute. While navigating through complex rules and regulations to format your suggestions correctly might seem daunting, we're here to help. Capt. Sudhir Subedar, who has been instrumental in drafting the STCW updates since 1978, 1995, and 2010, will represent your interests at the IMO.
                </p>
                <p className='my-3'>
                    However, he needs your input. <b>Capt. Subedar</b> is seeking practical and realistic suggestions from you, the seafaring community, on what changes you'd like to see in the STCW. Remember, suggestions should be practical—seek improvements rather than exemptions from requirements like oral exams or revalidation.
                </p>
                <p className='my-3 text-2xl dm-serif-display-regular text-center text-blue-500' style={{letterSpacing: '4px'}}>
                    Fill out this form and be part of shaping the future of STCW. This is your chance to make a difference!
                </p>
                </div>
            </div>
            <div className="md:flex-1/3 mt-4 md:mt-0 p-4 md:pt-20 text-start justify-between">
            <h2 className='text-2xl text-blue-600 text-start'>Identify gaps between the current STCW and the desired new STCW standards to enhance maritime training and competency. Here is a list which can help you out.</h2>
            <ul role="list" className="marker:text-blue-500 list-disc pl-5 space-y-3 text-slate-500" >
                <li className='pt-5'>Clarify definitions and terms, and evaluate PSC control measures and white list criteria.</li>
                <li>Enhance learning and training competencies, including standards for officers, engineers, ratings, AB, and ETO roles, or update GMDSS requirements.</li>
                <li>Streamline endorsements, recognition, revalidation processes, and ensure high standards in assessor assessments.</li>
                <li>Integrate advanced simulator training and refine qualifying sea service criteria or watchkeeping protocols.</li>
                <li>Remove obsolete elements, introduce necessary new provisions, and address national provisions, including SID.</li>
                <li>Standardize entry-level requirements or update NCV standards and protocols.</li>
            </ul>

            </div>
        </div>
            <div className="flex items-center justify-center">
                <Link to="/response-form" target="" className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-5 px-10 rounded-2xl inline-block mx-2 my-4 text-xl text-center grow-shrink " style={{maxWidth: '300px'}}>Fill out this suggestion form and be a part of the change</Link>
                {/* <a href="" target="" className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full inline-block mx-2 my-4">STCW background</a> */}
            </div>
        </>
        );
    };
    
    export default Hero;
    
    {/* <PdfViewer buttonText="IMO Circular" pdfUrl={ImoCircular}/>
    <PdfViewer buttonText="Download IMO Template for Suggestion" pdfUrl={Imoformat}/> */}
    {/* <PdfViewer buttonText="IMO Form For Suggestion" pdfUrl={Imoformat}/> */}
    {/* <DocumentViewer buttonText="IMO Format for Suggestions" fileUrl={Imoformat} /> */}
    {/* <PdfModal /> */}
        {/* <a href="" target="" className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full inline-block mx-2 my-4">IMO Circular</a> */}
        {/* <a href="" target="" className="bg-white hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full inline-block mx-2 my-4">IMO Form for suggestions</a> */}