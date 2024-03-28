"use client";

const COM = ({ params }: { params: { flag: Array<string> } }) => {
  console.log(params);

  return <div> [...flag] </div>;
};

export default COM;

// [...folderName]

// Dynamic Segments can be extended to catch-all subsequent segments by adding an
//       ellipsis inside the brackets [...folderName]

// but not macth with /folderName
