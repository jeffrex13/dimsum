import Image from 'next/image'
import React from 'react'
import DimsumImg from '../assets/pictures/dimsum-1.png'

const Home = () => {
  return (
    <div className="bg-[#FFB21B] pl-16 lg:pl-32 xl:pl-40">
      <div className="flex items-center justify-between text-[#421C13] py-32">
        <div className="flex flex-col gap-6">
          <p className="text-4xl xl:text-5xl font-bold">
            Discover the art of Dim Sum
          </p>
          <div className="flex flex-col gap-2 text-lg">
            <p>Savor the flavors of dim sum where</p>
            <p>every bite is a taste of tradition</p>
          </div>

          <div className="flex gap-8 pt-9">
            <button className="bg-[#421C13] rounded-md shadow-lg text-white px-6 py-4">
              View our Menu
            </button>
            <button className="border-solid border-[#421C13] border-2 rounded-md shadow-lg px-6 py-4">
              Learn More
            </button>
          </div>
        </div>
        <Image
          className="object-cover object-left h-[315px] w-[250px] xl:h-[515px] xl:w-[450px]"
          src={DimsumImg.src}
          alt=""
          width={250}
          height={315}
        />
      </div>
    </div>
  )
}

export default Home
