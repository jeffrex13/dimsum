import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#FFB21B] px-24 py-8 flex justify-between">
      <div>
        <p className=" font-semibold text-xl">Sample Company</p>
      </div>
      <div>
        <ul className="flex gap-16 text-s">
          <li>Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
