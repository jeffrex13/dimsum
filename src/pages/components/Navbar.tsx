import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="bg-[#FFB21B] px-16 lg:px-32 xl:px-40 py-8 flex items-center justify-between">
      <div>
        <p className="font-bold text-2xl text-[#421C13]">Sample Company</p>
      </div>
      <div>
        <div className="flex font-semibold text-[#421C13] text-xs lg:text-base gap-4 lg:gap-8 xl:gap-16">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
          >
            Menu
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
