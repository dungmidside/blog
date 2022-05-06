import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const NAV_ITEMS = [
  {
    label: "blog",
    href: "/",
  },
  {
    label: "resume",
    href: "/resume",
  },
  {
    label: "about",
    href: "/about",
  },
];
const Header = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <div className="text-2xl text-sky-700 hover:text-sky-500 cursor-pointer font-title">
          dungmidside
        </div>
      </Link>
      <div className="flex gap-6">
        {NAV_ITEMS.map((item) => (
          <Link href={item.href}>
            <a className="hover:text-sky-500">{item.label}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
