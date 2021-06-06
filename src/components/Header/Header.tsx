import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <h1 className={styles.title}>
      <Link href="/">dungmidside's blog</Link>
    </h1>
  );
};

export default Header;
