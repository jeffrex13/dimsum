import Image from 'next/image'
import React from 'react'
import { menuImages } from '../../helpers/menuImages'

const Menu = () => {
  return (
    <div className="flex flex-col items-center px-40 py-12">
      <h1 className="uppercase text-3xl text-[#421C13] font-bold">our menu</h1>
      <p className="my-8 tracking-wide w-[80%] xl:w-[50%] text-center">
        Our menu is inspired by the classic flavors of Cantonese dim sum. Each
        dish is crafted using the freshest ingredients and traditional
        techniques, offering a taste of Asia with every bite.
      </p>
      <div className="my-16 h-full w-[98%] xl:w-[90%]">
        <div className="flex justify-evenly mt-16">
          <div>
            <Image
              className="w-[480px] h-[320px] rounded-2xl"
              src={`${menuImages('shuijiao')?.src}`}
              alt="dimsum"
              width={480}
              height={320}
            />
            <div className="mt-4">
              <p className="text-[#421C13] font-bold">Shui Jiao Dumplings</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <Image
              className="w-[480px] h-[320px] rounded-2xl"
              src={`${menuImages('wonton')?.src}`}
              alt="dimsum"
              width={480}
              height={320}
            />
            <div className="mt-4">
              <p className="text-[#421C13] font-bold">Wonton Dumplings</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly mt-16">
          <div>
            <Image
              className="w-[480px] h-[320px] rounded-2xl"
              src={`${menuImages('bao')?.src}`}
              alt="dimsum"
              width={480}
              height={320}
            />
            <div className="mt-4">
              <p className="text-[#421C13] font-bold">Bao Dumplings</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <Image
              className="w-[480px] h-[320px] rounded-2xl"
              src={`${menuImages('jiaozi')?.src}`}
              alt="dimsum"
              width={480}
              height={320}
            />
            <div className="mt-4">
              <p className="text-[#421C13] font-bold">Jiaozi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly mt-16">
          <div>
            <Image
              className="w-[480px] h-[320px] rounded-2xl"
              src={`${menuImages('platter')?.src}`}
              alt="dimsum"
              width={480}
              height={320}
            />
            <div className="mt-4">
              <p className="text-[#421C13] font-bold">Dumplings Platter</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <Image
              className="w-[480px] h-[320px] rounded-2xl"
              src={`${menuImages('springroll')?.src}`}
              alt="dimsum"
              width={480}
              height={320}
            />
            <div className="mt-4">
              <p className="text-[#421C13] font-bold">Fried Spring Rolls</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
