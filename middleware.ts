import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define paths that require authentication
const PROTECTED_PATHS = [
  "/dashboard",
  "/learn",
  "/practice",
];

// Define paths for authentication pages
const AUTH_PATHS = [
  "/auth/login",
  "/auth/signup",
  "/auth/reset-password",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get the Firebase auth session cookie
  const session = request.cookies.get("__session")?.value;
  const isAuthenticated = !!session; // Simple check if the session cookie exists
  
  // Check if the path is a protected path
  const isProtectedPath = PROTECTED_PATHS.some(path => pathname.startsWith(path));
  
  // Check if the path is an auth path (login, signup, etc.)
  const isAuthPath = AUTH_PATHS.some(path => pathname === path);
  
  // If user is authenticated and trying to access auth pages, redirect to dashboard
  if (isAuthenticated && isAuthPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  // If user is not authenticated and trying to access protected paths, redirect to login
  if (!isAuthenticated && isProtectedPath) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

// Define the config for which paths the middleware should run on
export const config = {
  matcher: [
    // Protected paths
    "/dashboard/:path*",
    "/learn/:path*",
    "/practice/:path*",
    // Auth paths
    "/auth/login",
    "/auth/signup",
    "/auth/reset-password",
  ],
};