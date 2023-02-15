import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center px-40 py-24">
      <h1 className="uppercase text-3xl text-[#421C13] font-bold">about us</h1>
      <div className="border-solid border-black rounded-md shadow-2xl h-full w-[90%] px-24 py-24 mt-12">
        <p className="text-[#3A3A3A] tracking-wider">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}

export default About
