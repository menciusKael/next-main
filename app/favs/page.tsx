"use client";

import Link from "next/link";


const COM = () => {
  return (
    <>
      <h2>Favs Page</h2>

      <div className="flex-col flex">
        <Link href="/favs/1">To Fav Detail 1</Link>

        
        <Link href="/favs/1/2">To Fav Detail 2</Link>
        <Link href="/favs/1/2/3/4/5/6">To Fav Detail n</Link>

        
      </div>
    </>
  );
};
export default COM;
