import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
  const field = (request as any).nextUrl.searchParams.get("dataField");
  console.log((request as any).nextUrl);
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  ).json();
  const result = field ? { [field]: data[field] } : data;
  return NextResponse.json(result);
};
