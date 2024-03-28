export const GET = async () => {
  console.log("GET /api/time");
  return Response.json({ data: new Date().toLocaleTimeString() });
};
