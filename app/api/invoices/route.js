import dbConnect from "@/app/lib/db";
import Invoice from "@/app/lib/models/Invoice";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";
  const pageParam = searchParams.get("page") || "1";
  const pageSize = 10;

  // Validate and sanitize the page number
  const page = Math.max(1, parseInt(pageParam, 10) || 1);

  const filter = query ? { customer: { $regex: query, $options: "i" } } : {};

  try {
    const totalCount = await Invoice.countDocuments(filter);

    const invoices = await Invoice.find(filter)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    return Response.json({
      invoices,
      totalCount,
      currentPage: page,
      pageSize,
      totalPages: Math.ceil(totalCount / pageSize),
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error fetching invoices",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
