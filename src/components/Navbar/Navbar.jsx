import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className='lg:hidden absolute block top-16 w-full left-0 right-0 bg-secondary opacity-80 transition'>
        <ul className='text-center text-xl p-20'>
          <Link spy={true} smooth={true} to='/'>
            <li className='my-4 py-4 border-b border-primary hover:bg-primary hover:opacity-60 hover:rounded'>
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to='/home/indonesia'>
            <li className='my-4 py-4 border-b border-primary hover:bg-primary hover:opacity-60 hover:rounded'>
              Indonesia
            </li>
          </Link>
          <Link spy={true} smooth={true} to='/home/provinsi'>
            <li className='my-4 py-4 border-b border-primary hover:bg-primary hover:opacity-60 hover:rounded'>
              Provinsi
            </li>
          </Link>
          <Link spy={true} smooth={true} to='/home/about'>
            <li className='my-4 py-4 border-b border-primary hover:bg-primary hover:opacity-60 hover:rounded'>
              About
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <div className='bg-primary'>
      <nav>
        <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
          <div className='flex items-center flex-1'>
            <span className='text-3xl font-bold'>Covid ID</span>
          </div>
          <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
            <div className='flex-10'>
              <ul className='flex gap-8 mr-16 text-[18px]'>
                <Link spy={true} smooth={true} to='/'>
                  <li className='hover:text-secondary transition border-b-2 border-primary hover:border-secondary cursor-pointer'>
                    Home
                  </li>
                </Link>
                <Link spy={true} smooth={true} to='/home/indonesia'>
                  <li className='hover:text-secondary transition border-b-2 border-primary hover:border-secondary cursor-pointer'>
                    Indonesia
                  </li>
                </Link>
                <Link spy={true} smooth={true} to='/home/provinsi'>
                  <li className='hover:text-secondary transition border-b-2 border-primary hover:border-secondary cursor-pointer'>
                    Provinsi
                  </li>
                </Link>
                <Link spy={true} smooth={true} to='/home/about'>
                  <li className='hover:text-secondary transition border-b-2 border-primary hover:border-secondary cursor-pointer'>
                    About
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>{click && content}</div>
          <button className='block sm:hidden transition' onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
