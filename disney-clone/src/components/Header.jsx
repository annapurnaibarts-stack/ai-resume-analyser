import React, { useState } from "react";
import logo from "./../assets/logo.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical } from "react-icons/hi";

import HeaderItem from "./HeaderItem";

function Header() {

  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ];

  return (

    <div className="flex items-center justify-between p-5">

      <div className="flex items-center gap-4">

        {/* Logo */}
        <img
          src={logo}
          className="w-[100px] md:w-[215px] object-cover"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menu.map((item, index) => (
            <HeaderItem
              key={index}
              name={item.name}
              Icon={item.icon}
            />
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden gap-5 items-center">

          {/* First 3 Icons */}
          {menu.map((item, index) => (
            index < 3 && (
              <HeaderItem
                key={index}
                name=""
                Icon={item.icon}
              />
            )
          ))}

          {/* Toggle Icon */}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem
              name=""
              Icon={HiDotsVertical}
            />
          </div>

          {/* Remaining Menu */}
          {toggle && (
            <div className="absolute top-15 right-[20px] bg-[#131520] p-3 rounded-sm flex flex-col gap-3">
              {menu.map((item, index) => (
                index > 2 && (
                  <HeaderItem
                    key={index}
                    name={item.name}
                    Icon={item.icon}
                  />
                )
              ))}

            </div>
          )}

        </div>

      </div>

      {/* Profile */}
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[30px] md:w-[45px] rounded-full"
      />

    </div>
  );
}

export default Header;