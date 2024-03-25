"use client";

import Link from "next/link";
import Image from "next/image";

const COM = () => {
  return (
    <div>
      <h1> Home Page </h1>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Explore Next.js.</p>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className="flex-col flex">
        <Link href="/welcome">welcome page</Link>
        <Link href="/report">report Page</Link>
        <Link href="/favs" className="active">
          favs page
        </Link>
        <Link href="/skills" className="active">
          skills page
        </Link>
      </div>
    </div>
  );
};
export default COM;
