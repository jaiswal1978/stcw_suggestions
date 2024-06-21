import React, { useState } from 'react';
import supabase from './supabaseClient';

function ResponseForm() {
  const [formData, setFormData] = useState({
    name: '',
    coc: '',
    phoneNumber: '',
    section: '',
    response: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const options = ["Competency", "Endorsements", "Revalidation"];

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleToggleOption = (option) => {
    const currentSelection = formData.section;
    if (currentSelection.includes(option)) {
      // Remove the option if it's already included
      setFormData({
        ...formData,
        section: currentSelection.filter(item => item !== option)
      });
    } else {
      // Add the option if it's not included
      setFormData({
        ...formData,
        section: [...currentSelection, option]
      });
    }
  };

  const handleChange = (e) => {
    const { name, options } = e.target;
    if (options) {
      // Handle multiple select options for the 'section' field
      const values = Array.from(options).filter(option => option.selected).map(option => option.value);
      setFormData({ ...formData, [name]: values.join(', ') }); // Joins the array into a string separated by commas
    } else {
      // Regular input
      setFormData({ ...formData, [name]: e.target.value });
    }
  };



  // // to submit the data into supabase
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { data, error } = await supabase
  //     .from('stcw_responses')
  //     .insert([
  //       {
  //         name: formData.name,
  //         coc: formData.coc,
  //         phone_number: formData.phoneNumber,
  //         section: formData.section,
  //         response: formData.response
  //       }
  //     ]);
  //     console.log(formData);
  //   if (error) {
  //     setError(true);
  //   } else {
  //     setSubmitted(true);
  //   }
  // };


  // // to send a mail using mailgun
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5000/submit-form', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     const result = await response.json();
  //     if (response.ok) {
  //       console.log('Form submitted successfully:', result);
  //     } else {
  //       throw new Error(result.error);
  //     }
  //   } catch (error) {
  //     console.error('Failed to submit form:', error);
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // First, try inserting the data into Supabase
    const { data, error } = await supabase
      .from('stcw_responses')
      .insert([
        {
          name: formData.name,
          coc: formData.coc,
          phone_number: formData.phoneNumber,
          section: formData.section,
          response: formData.response
        }
      ]);
      // console.log('form submitted into database')
      setSubmitted(true);
  
    if (error) {
      console.error('Failed to submit to Supabase:', error);
      setError(true); // Update state to indicate error
      
      return; // Stop further execution if there's an error
    }
  
    //to send the email using mailgun and replit server
   
    // try {
    //   const mailResponse = await fetch('https://c61f886b-3c22-4f12-a4b4-013a80c89095-00-kehzkpa9cs6i.worf.replit.dev/submit-form', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   });
    //   const mailResult = await mailResponse.json();
    //   if (mailResponse.ok) {
    //     console.log('Form submitted successfully and email sent:', mailResult);
    //     setSubmitted(true);
    //   } else {
    //     throw new Error(mailResult.error);
    //   }
    // } catch (error) {
    //   console.error('Failed to send email:', error);
    //   setError(true);
    // }

    //to send the email using mailgun and replit server end

  };
  


  if (submitted) {
    return <div className="flex justify-center items-center min-h-screen">
        <div className='max-w-md mx-auto p-6 my-auto bg-green-500 text-white rounded-2xl'>
          <p className='text-3xl text-center font-bold'>Thank you for your suggestions.</p>
          <p className='text-2xl text-start font-medium pt-10'>This is a great step towards a better STCW!!</p>
          <p className='text-xl text-justify pt-10 '>We will contact you in case any clarification is needed on your suggestions.</p>
          <p className="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">You can close the tab now</p>
          </div>
      </div> ;
      
    console.log ('form submitted successfully');
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">
    <div className='max-w-md mx-auto p-6 my-auto bg-red-500 text-white rounded-2xl'>
      <p className='text-3xl text-center font-bold'>Sorry !!!</p>
      <p className='text-2xl text-center font-medium pt-10'>There was an error in submitting your response.</p>
      <p className='text-xl text-wrap pt-10 '>Please reload the form and give your inputs again or you can mail your suggestions at <a href="mailto:capt_subhedar@hotmail.com" className='underline text-white font-bold'> capt_subhedar@hotmail.com</a></p>
      </div>
    </div> ;
    console.log('error', error);
  }

  return (
    <div className="max-w-md mx-auto p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            data-lpignore="true"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="coc" className="block text-sm font-medium text-gray-700">Highest CoC Obtained</label>
          <input
            type="text"
            name="coc"
            id="coc"
            data-lpignore="true"
            value={formData.coc}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number (Incase we need to contact you for any clarification)</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            data-lpignore="true"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="section" className="block text-sm font-medium text-gray-700">Select which category your suggestion is related to... (not required)</label>
          <div className="flex flex-wrap">
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleToggleOption(option)}
                className={`m-1 px-4 py-2 border rounded ${formData.section.includes(option) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                {option}
              </button>
            ))}
          </div>
          {formData.section.length > 0 && (
            <div className="mt-4 p-4 border border-gray-400 rounded">
              <p className="text-sm text-gray-800">Selected Sections:</p>
              {formData.section.map((item, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
              ))}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="response" className="block text-sm font-medium text-gray-700">Type in your suggestion here.</label>
          <textarea
            name="response"
            id="response"
            data-lpignore="true"
            value={formData.response}
            onChange={handleChange}
            rows="10"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>
        <div className='align-self-center'>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResponseForm;
