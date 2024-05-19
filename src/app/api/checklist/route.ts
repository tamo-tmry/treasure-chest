import { NextRequest, NextResponse } from "next/server";

const apiUrl = process.env.API_URL!;
const apiKey = process.env.API_KEY!;

export async function GET() {
  try {
    const response = await fetch(`${apiUrl}/checklsits`, {
      method: "GET",
      headers: {
        "X-MICROCMS-API-KEY": apiKey,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "GET /checklists" },
        { status: response.status },
      );
    } else {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (e) {
    return NextResponse.json({ error: "GET /checklists" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const response = await fetch(`${apiUrl}/checklsits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": apiKey,
      },
      body: JSON.stringify({ label: requestBody.label, is_checked: false }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "POST /checklists" },
        { status: response.status },
      );
    } else {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }
  } catch (e) {
    return NextResponse.json({ error: "POST /checklists" }, { status: 500 });
  }
}
