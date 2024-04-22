import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container paddig-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src={"/safar-book-logo.png"} alt="logo" width={74} height={74} />
      </Link>
    </nav>
  );
};

export default Navbar;
