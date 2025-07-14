import NavItems from './NavItems';
import { IoBagOutline, IoMenu } from "react-icons/io5";
import { FaApple } from 'react-icons/fa';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface Item {
  id: number;
  name: string;
}

interface NavBarProps {
  items: Item[];
}

export default function NavBar({ items }: NavBarProps) {
  const [active, setActive] = useState<boolean>(false);

  function openMenu() {
    setActive(prev => !prev);
  }

  return (
    <>
      <nav className={`bg-black flex justify-between items-center px-5 lg:px-28 fixed z-40 w-full h-[80px]`}>
        <FaApple className='text-white text-base' />
        <div className='hidden md:flex lg:flex justify-between w-63'>
          <NavItems items={items} show={setActive} />
        </div>
        <div className='text-white text-lg gap-3 hidden md:!flex'>
          <CiSearch />
          <IoBagOutline />
        </div>
        
        <button className=' gap-3 block sm:block md:hidden lg:hidden' onClick={openMenu}>
          <IoMenu className='w-8 text-white' />
        </button>
      </nav>

      <div className={`block px-0 fixed w-full transition-all md:hidden lg:hidden ${active ? 'translate-x-0' : '-translate-x-full'}`}>
        <NavItems items={items} show={setActive} height='height' />
      </div>
    </>
  );
}