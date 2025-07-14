import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaApple } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';

interface Item {
  id: number;
  name: string;
}

interface NavItemsProps {
  items: Item[];
  show: React.Dispatch<React.SetStateAction<boolean>>;
  height?: string;
  
}

export default function NavItems({ items, show  , height}: NavItemsProps) {
  return (
    <>
      <ul className={`flex gap-5 items-center flex-col pt-23 md:pt-0 lg:pt-0 md:h-14 md:flex-row lg:flex-row lg:h-14 ${height ? 'h-screen flex flex-col justify-center items-center bg-black' : ''}`}>
        <FaApple className='text-white text-base !block md:!hidden' />
        {items?.map((element, index) => (
          <li onClick={() => show(prev => !prev)} className={` text-sm text-[#86868b] fontLink `} key={index}>
            <a href={`${element.id}`}>{element.name}</a>
          </li>
        ))}
        <div className='text-white text-lg gap-3 flex flex-col md:hidden'>
          <CiSearch />
          <IoBagOutline />
        </div>
      </ul>
    </>
  );
}
