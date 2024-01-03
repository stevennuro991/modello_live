import React from 'react';
import successImage from '../../src/assets/images/correct.png';

const SuccessDialog = ({ onClose, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
   
        <div className="flex justify-center p-4">
          <img src={successImage} alt="Success" className="w-32"/>
        </div>
        <div className="text-center p-4">
          <p className="text-md leading-relaxed">Booking request sent successfully!</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessDialog;
