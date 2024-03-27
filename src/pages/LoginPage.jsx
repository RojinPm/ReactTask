import React from 'react';
import { FaApple, FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/LoginImg.png';
const LoginPage = () => {

  const navigate=useNavigate()

  const onSubmit = () =>{

    navigate('/dashboard')
  }
  return (
    <div className="flex flex-col h-screen ">

  <div className="bg-indigo-500 shadow-md h-16 py-4 flex items-center justify-between px-4 md:hidden">
    <div className="text-white flex items-center">
    <svg width="350" height="80" viewBox="0 0 360 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.9902 40.1291L39.7848 36.9468C39.4943 36.235 38.7951 35.7334 37.9787 35.7334C37.1081 35.7334 36.3707 36.3039 36.1202 37.0915L29.991 42.1481C29.6755 41.9286 29.2921 41.8 28.8787 41.8C28.3681 41.8 27.9033 41.9963 27.5557 42.3175L20.1214 38.6829C21.0052 32.3634 26.4323 27.5 32.9954 27.5C40.051 27.5 45.7938 33.1209 45.9902 40.1291ZM26.9993 44.2717L20 40.8498C20.1854 47.8678 25.9327 53.5 32.9954 53.5C39.6871 53.5 45.1979 48.444 45.9161 41.9437L45.7557 42.2565L39.4134 39.004C39.0571 39.391 38.5462 39.6334 37.9787 39.6334C37.5037 39.6334 37.0683 39.4635 36.73 39.1812L30.8023 44.0715C30.649 44.9955 29.8462 45.7 28.8787 45.7C27.9825 45.7 27.2274 45.0953 26.9993 44.2717Z" fill="#605BFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.9902 40.1291L39.7848 36.9468C39.4943 36.235 38.7951 35.7334 37.9787 35.7334C37.1081 35.7334 36.3707 36.3039 36.1202 37.0915L29.991 42.1481C29.6755 41.9286 29.2921 41.8 28.8787 41.8C28.3681 41.8 27.9033 41.9963 27.5557 42.3175L20.1214 38.6829C21.0052 32.3634 26.4323 27.5 32.9954 27.5C40.051 27.5 45.7938 33.1209 45.9902 40.1291ZM26.9993 44.2717L20 40.8498C20.1854 47.8678 25.9327 53.5 32.9954 53.5C39.6871 53.5 45.1979 48.444 45.9161 41.9437L45.7557 42.2565L39.4134 39.004C39.0571 39.391 38.5462 39.6334 37.9787 39.6334C37.5037 39.6334 37.0683 39.4635 36.73 39.1812L30.8023 44.0715C30.649 44.9955 29.8462 45.7 28.8787 45.7C27.9825 45.7 27.2274 45.0953 26.9993 44.2717Z" fill="#FAFAFB"/>
<path d="M59.76 47.5C59.4 47.5 59.12 47.4067 58.92 47.22C58.7333 47.02 58.64 46.74 58.64 46.38V34.52C58.64 34.16 58.7333 33.8867 58.92 33.7C59.12 33.5 59.4 33.4 59.76 33.4H64.52C65.4933 33.4 66.32 33.5467 67 33.84C67.6933 34.1333 68.22 34.5533 68.58 35.1C68.9533 35.6467 69.14 36.3067 69.14 37.08C69.14 37.9333 68.8867 38.6533 68.38 39.24C67.8733 39.8267 67.1867 40.22 66.32 40.42V40.12C67.3067 40.2533 68.08 40.6267 68.64 41.24C69.2 41.84 69.48 42.6267 69.48 43.6C69.48 44.8533 69.0667 45.82 68.24 46.5C67.4133 47.1667 66.2533 47.5 64.76 47.5H59.76ZM60.64 45.9H64.52C65.52 45.9 66.26 45.7067 66.74 45.32C67.22 44.92 67.46 44.32 67.46 43.52C67.46 42.72 67.22 42.1267 66.74 41.74C66.26 41.3533 65.52 41.16 64.52 41.16H60.64V45.9ZM60.64 39.56H64.2C65.16 39.56 65.8867 39.3667 66.38 38.98C66.8733 38.5933 67.12 38.0267 67.12 37.28C67.12 36.5333 66.8733 35.9667 66.38 35.58C65.8867 35.1933 65.16 35 64.2 35H60.64V39.56ZM75.1728 47.68C74.4928 47.68 73.8795 47.5467 73.3328 47.28C72.7995 47.0133 72.3795 46.6533 72.0728 46.2C71.7661 45.7467 71.6128 45.2333 71.6128 44.66C71.6128 43.94 71.7928 43.3733 72.1528 42.96C72.5261 42.5333 73.1328 42.2333 73.9728 42.06C74.8261 41.8733 75.9728 41.78 77.4128 41.78H78.3528V43.02H77.4328C76.4728 43.02 75.7128 43.0667 75.1528 43.16C74.5928 43.2533 74.1928 43.4133 73.9528 43.64C73.7261 43.8533 73.6128 44.1533 73.6128 44.54C73.6128 45.0467 73.7861 45.46 74.1328 45.78C74.4795 46.0867 74.9595 46.24 75.5728 46.24C76.0661 46.24 76.4995 46.1267 76.8728 45.9C77.2461 45.66 77.5395 45.34 77.7528 44.94C77.9795 44.54 78.0928 44.08 78.0928 43.56V41.26C78.0928 40.5 77.9328 39.9533 77.6128 39.62C77.2928 39.2867 76.7661 39.12 76.0328 39.12C75.6061 39.12 75.1595 39.1733 74.6928 39.28C74.2395 39.3867 73.7661 39.5667 73.2728 39.82C73.0461 39.9267 72.8528 39.96 72.6928 39.92C72.5328 39.88 72.4061 39.7933 72.3128 39.66C72.2195 39.5133 72.1661 39.36 72.1528 39.2C72.1528 39.0267 72.1928 38.86 72.2728 38.7C72.3661 38.54 72.5195 38.42 72.7328 38.34C73.3195 38.06 73.8995 37.86 74.4728 37.74C75.0461 37.62 75.5861 37.56 76.0928 37.56C76.9861 37.56 77.7195 37.7 78.2928 37.98C78.8795 38.26 79.3128 38.6867 79.5928 39.26C79.8728 39.8333 80.0128 40.5733 80.0128 41.48V46.62C80.0128 46.94 79.9328 47.1933 79.7728 47.38C79.6128 47.5533 79.3795 47.64 79.0728 47.64C78.7795 47.64 78.5461 47.5533 78.3728 47.38C78.1995 47.1933 78.1128 46.94 78.1128 46.62V45.32H78.2928C78.1861 45.8133 77.9861 46.24 77.6928 46.6C77.4128 46.9467 77.0595 47.2133 76.6328 47.4C76.2061 47.5867 75.7195 47.68 75.1728 47.68ZM86.215 47.68C85.6283 47.68 85.0217 47.6133 84.395 47.48C83.7817 47.3467 83.215 47.12 82.695 46.8C82.5217 46.68 82.4017 46.5467 82.335 46.4C82.2683 46.2533 82.2417 46.1067 82.255 45.96C82.2817 45.8 82.3417 45.6667 82.435 45.56C82.5417 45.44 82.6683 45.3667 82.815 45.34C82.975 45.3133 83.1417 45.3467 83.315 45.44C83.835 45.7333 84.335 45.94 84.815 46.06C85.295 46.1667 85.7683 46.22 86.235 46.22C86.9417 46.22 87.475 46.0933 87.835 45.84C88.195 45.5867 88.375 45.2467 88.375 44.82C88.375 44.4733 88.255 44.2067 88.015 44.02C87.775 43.82 87.415 43.6667 86.935 43.56L85.035 43.18C84.2083 43.0067 83.5817 42.7 83.155 42.26C82.7283 41.82 82.515 41.26 82.515 40.58C82.515 39.9667 82.6817 39.4333 83.015 38.98C83.3483 38.5267 83.815 38.18 84.415 37.94C85.015 37.6867 85.7083 37.56 86.495 37.56C87.0817 37.56 87.635 37.6333 88.155 37.78C88.675 37.9267 89.155 38.1467 89.595 38.44C89.7683 38.5333 89.8817 38.66 89.935 38.82C89.9883 38.9667 89.995 39.1133 89.955 39.26C89.9283 39.4067 89.8617 39.54 89.755 39.66C89.6483 39.7667 89.515 39.8333 89.355 39.86C89.2083 39.8733 89.0417 39.8333 88.855 39.74C88.455 39.4867 88.055 39.3067 87.655 39.2C87.2683 39.0933 86.8817 39.04 86.495 39.04C85.7883 39.04 85.255 39.1733 84.895 39.44C84.5483 39.6933 84.375 40.04 84.375 40.48C84.375 40.8133 84.4817 41.0867 84.695 41.3C84.9083 41.5133 85.2417 41.6667 85.695 41.76L87.595 42.14C88.4617 42.3133 89.115 42.6067 89.555 43.02C90.0083 43.4333 90.235 43.9933 90.235 44.7C90.235 45.62 89.8683 46.3467 89.135 46.88C88.4017 47.4133 87.4283 47.68 86.215 47.68ZM97.0625 47.68C95.9958 47.68 95.0758 47.48 94.3025 47.08C93.5425 46.6667 92.9492 46.0867 92.5225 45.34C92.1092 44.58 91.9025 43.68 91.9025 42.64C91.9025 41.6267 92.1092 40.74 92.5225 39.98C92.9358 39.22 93.5025 38.6267 94.2225 38.2C94.9425 37.7733 95.7625 37.56 96.6825 37.56C97.3625 37.56 97.9692 37.6733 98.5025 37.9C99.0358 38.1133 99.4892 38.4333 99.8625 38.86C100.249 39.2733 100.536 39.78 100.723 40.38C100.923 40.98 101.023 41.6533 101.023 42.4C101.023 42.6267 100.956 42.8 100.823 42.92C100.689 43.0267 100.489 43.08 100.223 43.08H93.5025V41.84H99.6625L99.3225 42.12C99.3225 41.4533 99.2225 40.8867 99.0225 40.42C98.8358 39.9533 98.5492 39.6 98.1625 39.36C97.7892 39.1067 97.3225 38.98 96.7625 38.98C96.1358 38.98 95.6025 39.1267 95.1625 39.42C94.7358 39.7133 94.4092 40.12 94.1825 40.64C93.9558 41.16 93.8425 41.7667 93.8425 42.46V42.58C93.8425 43.7533 94.1158 44.64 94.6625 45.24C95.2225 45.8267 96.0292 46.12 97.0825 46.12C97.4825 46.12 97.9025 46.0667 98.3425 45.96C98.7958 45.8533 99.2225 45.6733 99.6225 45.42C99.8492 45.2867 100.049 45.2267 100.223 45.24C100.409 45.2533 100.556 45.3133 100.663 45.42C100.783 45.5267 100.856 45.66 100.883 45.82C100.909 45.98 100.883 46.1467 100.803 46.32C100.723 46.48 100.583 46.6267 100.383 46.76C99.9292 47.0667 99.4025 47.3 98.8025 47.46C98.2025 47.6067 97.6225 47.68 97.0625 47.68Z" fill="#FAFAFB"/>
</svg>

     
    </div>
    <div className=" rounded-full p-2">
     
    </div>
  </div>

 
  <div className="flex-1 flex md:flex-row">
    <div className="flex-1 shadow-md bg-indigo-500 customSkeew hidden md:block relative">
      <div className="absolute inset-0 flex items-center justify-center">
      <div className='absolute h-12 w-12 top-4 left-2'>

      <img src={Logo} className=' ml-6'/>

      </div>


        <h2 className="text-6xl font-bold text-white">BASE</h2>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <FaGithub size={24} className="text-white mr-2" />
        <FaTwitter size={24} className="text-white mr-2" />
        <FaLinkedin size={24} className="text-white mr-2" />
        <FaDiscord size={24} className="text-white mr-2" />
      </div>
    </div>
    <div className="flex-1 md:mt-2 mt-4 flex flex-col justify-center px-4 sm:px-8">
      <div className="max-w-2xl mx-auto md:ml-36">
        <div className="mb-8 md:text-center">
          <h1 className="text-2xl font-bold mb-2 text-left">Sign In</h1>
          <p className="font-bold text-sm text-left">Sign in to your account</p>
        </div>
        <div className="flex  sm:flex-row mb-4">
         <button className="flex items-center bg-white ml-3 text-gray-700 shadow-sm md:px-4 md:py-2 px-1 py-1 rounded-r md:rounded-r-none md:rounded-l focus:outline-none focus:shadow-outline hover:bg-gray-100 transition duration-150 ease-in-out">
            <FcGoogle className="mr-2 text-xs  md:text-sm" /> Sign in with Google
          </button>
          <button className="flex items-center bg-white ml-3 text-gray-700 shadow-sm md:px-4 md:py-2 px-1 py-1 rounded-r md:rounded-r-none md:rounded-l focus:outline-none focus:shadow-outline hover:bg-gray-100 transition duration-150 ease-in-out">
            <FaApple className="mr-2 text-xs  md:text-sm" /> Sign in with Apple
          </button>
        </div>
      </div>
      <div className="w-full max-w-xs sm:max-w-md mx-auto p-8 md:mt-6 bg-white rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <Link className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
            Forgot Password?
          </Link>
          <div className='flex justify-center'>
            <button
              className="bg-indigo-500 w-80 text-center mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              Sign In
            </button>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center mt-8'>
            <p className='mr-2'>Don't have an account ?</p>
            <Link className='text-blue-500'>Register here</Link>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div className="bg-white py-2 flex justify-center  md:hidden">
    <FaGithub size={24} className="text-slate-700 mr-4" />
    <FaTwitter size={24} className="text-slate-700 mr-4" />
    <FaLinkedin size={24} className="text-slate-700 mr-4" />
    <FaDiscord size={24} className="text-slate-700 mr-4" />
  </div>
</div>
  );
};

export default LoginPage;