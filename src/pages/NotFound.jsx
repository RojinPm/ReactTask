import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="hero flex justify-center items-center">
        <div className="text-center hero-content">
          <div className="max-w-lg mx-auto flex items-center justify-center flex-col">
            <h1 className=" color lg:text-8xl  text-5xl font-bold lg:mb-8 mb-5">
              Oops!
            </h1>

            <p className=" color text-center lg:text-3xl text-3xl lg:mb-8 mb-2">
              No Page Found!
            </p>
            <div className="hero flex justify-center items-center">
        <div className="text-center hero-content">
          <div className="max-w-lg mx-auto flex items-center justify-center flex-col">
            <h1 className=" color lg:text-8xl  text-5xl font-bold lg:mb-8 mb-5">
              Oops!
            </h1>

            <p className=" color text-center lg:text-3xl text-3xl lg:mb-8 mb-2">
              No Page Found!
            </p>

            <Link
              className="btn flex items-center font-semibold text-md p-4 rounded-md back mt-5 ml-1 w-40 text-white bg-indigo-500  ease-out duration-300 hover:bg-purple-500 hover:scale-x-105 hover:scale-y-105 focus:outline-none border-purple-800"
              href="/home"
            >
             

              <span className="ml-2">Back Home</span>
            </Link>
          </div>
        </div>
      </div>
           
          </div>
        </div>
      </div>
  )
}

export default NotFound