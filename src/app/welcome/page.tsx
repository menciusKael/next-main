"use client";

import { useRouter } from "next/navigation";

const COM = () => {
  
  const router = useRouter();

  return (
    <>
      <h2> welcome page </h2>
      <button type="button" onClick={() => router.push("/welcome/contact")}>
        Contact Me
      </button>
    </>
  );
};
export default COM;
