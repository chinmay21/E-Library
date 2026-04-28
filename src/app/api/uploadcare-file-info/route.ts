// /api/uploadcare-file-info/route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const uuid = searchParams.get("uuid");

  const res = await fetch(`https://api.uploadcare.com/files/${uuid}/`, {
    headers: {
      Authorization: `Uploadcare.Simple ${process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}:${process.env.UPLOADCARE_SECRET_KEY}`,
    },
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to fetch file info" }, { status: res.status });
  }

  const fileInfo = await res.json();
  return Response.json({ cdn_url: fileInfo.cdn_url });
}

