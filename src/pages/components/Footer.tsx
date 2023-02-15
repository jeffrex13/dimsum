import React from 'react'
import Dimsum from '../assets/pictures/dimsum-7.png'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <div
        style={{
          background: `url(${Dimsum.src})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: '75% 25%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="flex justify-between w-full h-[26rem] py-12 px-40 mt-32 text-[#BCBABA]"
      >
        <div className="w-[35%]">
          <p className="font-medium text-2xl text-[#E5E5E5]">Sample Company</p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tincidunt justo ligula, vitae scelerisque libero dictum quis.
            Quisque pretium enim ac neque tincidunt, a ullamcorper purus
            rhoncus.
          </p>
          <p className="mt-28">© Company Name 2023. All rights reserved.</p>
        </div>
        <div className="w-[35%]">
          <p className="font-medium text-2xl text-[#E5E5E5]">Contact Us</p>
          <div className="flex items-center gap-4 mt-8">
            <AiOutlinePhone className="text-4xl" />
            <p>+4 450 68 7474</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <AiOutlineMail className="text-4xl" />
            <p>info@companyname.com</p>
          </div>
          <div className="flex gap-4 items-center mt-28 text-4xl">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterSquare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
