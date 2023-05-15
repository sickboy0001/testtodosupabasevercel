import React  from 'react';
import Link from 'next/link';


const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/sample",label:"Sample"},
  {href:"/main",label:"Main"},
]

const HeaderMenu = () => {
  return (
    <div>
            <nav  className="flex-col flex-grow hidden md:flex md:justify-end md:flex-row ">
                {NAV_ITEMS.map(item=>{

                    return (
                      <Link key={item.href} href={item.href} legacyBehavior>
                      <a  className="px-4 py-1 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">{item.label}</a>
                      </Link>
                    )
                  })
                }
            </nav>

    </div>

  );
};

export default HeaderMenu;