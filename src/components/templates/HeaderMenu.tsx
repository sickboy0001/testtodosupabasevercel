import React from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/sample", label: "Sample" },
  { href: "/main", label: "Main" },
  { href: "/samplednd", label: "samplednd" },
  { href: "/goodthings", label: "3goodthings" },
];

const HeaderMenu = () => {
  return (
    <div>
      <div className="w-full " id="navbar-default">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0  md:border-0 md:bg-white">
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.href}>
                <Link key={item.href} href={item.href} legacyBehavior>
                  {/* { href: "/goodthingsabout", label: "about" }, */}
                  <a className="px-5 py-1 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
