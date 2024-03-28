"use client";

import Link from "next/link";

const COM = ({ params }: { params: { flag: Array<string> } }) => {
  console.log(params);

  return (
    <div>
      <h5>[[...tag]] </h5>
      <div className="flex-col flex">
        <Link href={`/skills/1`}>To Fav Detail 1</Link>
        <Link href={`/skills/1/2/3`}>To Fav Detail n</Link>
        <Link href={`/skills`}>To Fav Detail 0</Link>
      </div>
    </div>
  );
};

export default COM;

// same to [...folderName],

// but match with /skill path

// folder skill without page.tsx
