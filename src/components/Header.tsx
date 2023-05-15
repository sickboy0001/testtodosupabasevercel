import React from 'react';
import HeaderLogin from '@/components/HeaderLogin'
import HeaderMenu from '@/components/HeaderMenu'
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-sky-100 py-2 px-6 flex justify-between items-center max-width: 100vw;">
          <div className='flex'>
            <Link  href="/" className="text-gray-800 font-semibold">My Site</Link >
            <HeaderMenu/>
          </div>
          <div className='flex'>
            <HeaderLogin/>
          </div>
        </nav>

      </header>

    </div>

  );
  }
export default Header;
