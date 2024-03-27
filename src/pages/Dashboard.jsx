import React, { useEffect, useState } from 'react';
import { FaBell, FaCalendarAlt, FaCog, FaFileInvoice, FaFileUpload, FaSpinner } from 'react-icons/fa';
import { FaRegBell } from "react-icons/fa6";
import { HiMenuAlt3, HiViewGrid } from 'react-icons/hi';
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/Logo.png';
import ExcelImage from '../assets/images/Microsoft_Office_Excel_(2019–present).png';
import userProfileImg from '../assets/images/photo-1535713875002-d1d0cf377fde.png';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true); 
      setTimeout(() => {
        setUploaded(true); 
        setUploading(false);
      }, 2000);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setUploaded(false);
  };
  setTimeout(() => {
    setUploading(false);
    setUploaded(true); // This line sets uploaded to true after the delay
  }, 2000);

  return (
    <div>
      <div className="flex flex-col max-w-md mx-auto p-3 border-2 border-slate-100 items-center justify-center">
        <label
          htmlFor="file-input"
          className={`flex flex-col items-center justify-center w-64 h-64 rounded-lg cursor-pointer transition-colors duration-300 ${
            file ? '' : ''
          }`}
        >
          <img
            src={ExcelImage}
            alt="Uploaded File"
            className={`w-8 h-8 ${file ? 'mb-4' : ''}`}
          />
          <p className="mt-4 text-gray-600 text-center">
            {file ? file.name : 'Drop your Excel sheet here or browse'}
          </p>
        </label>
        <input
          id="file-input"
          type="file"
          className="hidden"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
        />
        {!file && (
          <button
            className="mt-4 flex items-center justify-center py-2 w-full bg-indigo-500 text-white rounded-md transition-colors duration-300"
            onClick={handleUpload}
            disabled={uploading || uploaded}
          >
            <MdOutlineFileUpload className="h-6 w-6 mr-2" />
            {uploading ? <FaSpinner className="animate-spin ml-2 text-black" /> : 'Upload'}
          </button>
        )}
       {uploaded && file && (
  <div className="mt-4 flex items-center">
    
    <button
      className="px-4 py-2 text-center rounded-md text-red-600 transition-colors duration-300"
      onClick={handleRemove}
    >
      Remove
    </button>
  </div>
)}
      </div>

      <div className='md:max-w-7xl max-w-xs mx-auto'>
        <h2 className='font-bold text-xl px-6 py-3'>Uploads</h2>
        <div className='overflow-x-auto rounded-lg shadow-sm shadow-slate-200'>
          <table className='w-full border-collapse bg-white min-w-max'>
            <thead>
              <tr className='bg-gray-100 text-slate-700'>
                <th className='px-6 py-3 text-left border'>SI.No</th>
                <th className='px-6 py-3 text-left border'>Links</th>
                <th className='px-6 py-3 text-left border'>Prefix</th>
                <th className='px-6 py-3 text-left border'>Add Tags</th>
                <th className='px-6 py-3 text-left border'>Selected Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' bg-white shadow-md'>
                <td className='px-6 py-4 border border-gray-300'>01</td>
                <td className='px-6 py-4 border border-gray-300 text-blue-500'>
                  https://example.com/link1
                </td>
                <td className='px-6 py-4 border border-gray-300'>prefix1</td>
                <td className='px-6 py-4 border border-gray-300 relative'>
                  <div className='relative'>
                    <div className='bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300'>
                      <select
                        className='appearance-none w-full py-2 px-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      >
                        <option className='hover:bg-gray-100' value=''>
                          Add Tags
                        </option>
                        <option className='hover:bg-gray-100' value='tag1'>
                          Tag 1
                        </option>
                        <option className='hover:bg-gray-100' value='tag2'>
                          Tag 2
                        </option>
                        <option className='hover:bg-gray-100' value='tag3'>
                          Tag 3
                        </option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                          className='fill-current h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 border border-gray-300 flex items-center'>
                  <button className='bg-blue-600 rounded-md text-white flex items-center px-3 py-1 p-1 ml-1 transition-colors duration-300'>
                    Tag1
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-x-hidden">
      
      <div
        className={`bg-white shadow-md flex flex-col justify-between ${
          sidebarOpen ? 'w-72' : 'w-0'
        } duration-300 fixed z-10 h-screen`}
      >
        <div className={`px-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
         
          <div className="flex items-center justify-between py-6">
            <Link to='/' className="flex items-center">
              <img src={LogoImg} alt="Logo" className="w-8 h-8 ml-2" />
              <span className="text-2xl font-bold ml-2">Base</span>
            </Link>
            <HiMenuAlt3 className="cursor-pointer lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)} />
          </div>

         
          <nav>
  <ul className="space-y-4">
    <li className='hover:text-indigo-500'>
      <Link href="#" className="flex items-center px-4 py-2 rounded-md ">
        <HiViewGrid className="w-6 h-6 text-slate-500 hover:text-indigo-500" />
        <span className="ml-4 font-semibold text-slate-700 hover:text-indigo-500">Dashboard</span>
      </Link>
    </li>
    <li className='hover:text-indigo-500'>
      <Link href="#" className="flex items-center px-4 py-2 rounded-md  ">
        <FaFileUpload className="w-6 h-6 text-slate-500 hover:text-indigo-500 " />
        <span className="ml-4 font-semibold text-slate-700 hover:text-indigo-500">Upload</span>
      </Link>
    </li>
    <li className='hover:text-indigo-500'>
      <Link href="#" className="flex items-center px-4 py-2 rounded-md ">
        <FaFileInvoice className="w-6 h-6 text-slate-500 hover:text-indigo-500 " />
        <span className="ml-4 font-semibold text-slate-700 hover:text-indigo-500">Invoices</span>
      </Link>
    </li>
    <li className='hover:text-indigo-500'>
      <Link href="#" className="flex items-center px-4 py-2 rounded-md ">
        <FaCalendarAlt className="w-6 h-6 text-slate-500 hover:text-indigo-500" />
        <span className="ml-4 font-semibold text-slate-700 hover:text-indigo-500">Schedule</span>
      </Link>
    </li>
    <li className='hover:text-indigo-500'>
      <Link href="#" className="flex items-center px-4 py-2 rounded-md ">
        <FaBell className="w-6 h-6 text-slate-500 hover:text-indigo-500 " />
        <span className="ml-4 font-semibold text-slate-700 hover:text-indigo-500">Notifications</span>
      </Link>
    </li>
    <li className='hover:text-indigo-500'>
      <Link href="#" className="flex items-center px-4 py-2 rounded-md ">
        <FaCog className="w-6 h-6 text-slate-500 hover:text-indigo-500 " />
        <span className="ml-4 font-semibold text-slate-700 hover:text-indigo-500">Settings</span>
      </Link>
    </li>
  </ul>
</nav>
        </div>
      </div>

      
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-72' : ''}`}>
        
        <div className="bg-white shadow-sm flex justify-between items-center p-4 lg:px-8">
          <div className="flex items-center">
            {isMobile && (
              <HiMenuAlt3 className="cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
            )}
            <span className="text-xl font-bold text-black ml-4">Upload CSV</span>
          </div>
          <div className="flex items-center">
           
            <FaRegBell className="w-6 h-6 mr-4" />
            <img src={userProfileImg} alt="Avatar" className="w-8 h-8 rounded-full" />
          </div>
        </div>

      
        <main className="flex-1 p-8">
          
          <FileUpload />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;