import React from 'react'
import DimsumImg from './assets/pictures/dimsum-1.png'

const Home = () => {
  return (
    <div className="bg-[#FFB21B] pl-40">
      <div className="flex items-center justify-between text-[#421C13] py-32">
        <div className="flex flex-col gap-6">
          <p className="text-5xl font-bold">Discover the art of Dim Sum</p>
          <div className="flex flex-col gap-2 text-lg">
            <p>Savor the flavors of dim sum where</p>
            <p>every bite is a taste of tradition</p>
          </div>

          <div className="flex gap-8 pt-9">
            <button className="bg-[#421C13] rounded-md shadow-lg text-white px-6 py-4">
              View our Menu
            </button>
            <button className="border-solid border-[#421C13] rounded-md shadow-lg border-2 px-6 py-4">
              Learn More
            </button>
          </div>
        </div>
        <img
          className="object-cover object-left h-[515px] w-[450px]"
          src={DimsumImg.src}
          alt=""
        />
      </div>
    </div>
  )
}

export default Home
