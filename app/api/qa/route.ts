export async function GET(NextRequest: Request) {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  const searchParams = (NextRequest as any).nextUrl.searchParams;
  const query = searchParams.get("query"); // query
  return Response.json(data);
}
