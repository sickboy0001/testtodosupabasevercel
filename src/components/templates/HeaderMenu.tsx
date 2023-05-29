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
        <ul className="flex font-medium  rounded-lg  flex-row   bg-sky-50 ">
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.href}>
                <Link key={item.href} href={item.href} legacyBehavior>
                  {/* { href: "/goodthingsabout", label: "about" }, */}
                  <a className="px-2   py-1 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
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
