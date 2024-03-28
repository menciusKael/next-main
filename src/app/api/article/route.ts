import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return NextResponse.json({ data });
};

export const POST = async (request: { json: () => any }) => {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 200 }
  );
};
