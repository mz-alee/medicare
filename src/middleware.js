import { NextResponse } from "next/server";

export function middleware(request) {
  const loggedInUser = request.cookies.get("token")?.value;

  console.log("middleware triggered");
  console.log("User token:", loggedInUser);

  if (!loggedInUser || request.nextUrl.pathname !== "/Login") {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/doctordashboard","/profile","/forget","/Resetpassword"]
};

