import { NextResponse } from "next/server";

export function middleware(request) {
  const loggedInUser = request.cookies.get("token")?.value;
  if (!loggedInUser && request.nextUrl.pathname !== "/Login") {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/therapistdashboard"],
};
